import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export default function EventForm(props) {
  const {
    isFormOpen,
    onClose,
    handleEvent,
    isUpdating,
    event,
    eventsList,
    setEventsList,
  } = props;

  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (event) {
      setEventName(event.eventName);
      setDate(dayjs(event.date, "MM-DD-YYYY"));
      setTime(dayjs(event.time, "hh:mm A"));
      setDescription(event.description);
    }
  }, [event]);

  const handleForm = () => {
    const formatedDate = dayjs(date).format("MM-DD-YYYY");
    const formatedTime = dayjs(time).format("hh:mm A");

    if (eventName.trim() === "") {
      alert("Event Name is required");
      return;
    }

    if (isUpdating) {
      const updatedEventsList = eventsList.map((existingEvent) => {
        if (existingEvent.id === event.id) {
          return {
            ...existingEvent,
            eventName,
            date: formatedDate,
            time: formatedTime,
            description,
          };
        }
        return existingEvent;
      });

      setEventsList(updatedEventsList);
    }
    if (!isUpdating) {
      const isEventNameAlreadyExists = eventsList.some(
        (existingEvent) => existingEvent.eventName === eventName
      );

      if (isEventNameAlreadyExists) {
        alert("Event with the same name already exists");
        return;
      }

      const formData = {
        id: uuidv4(),
        eventName,
        date: formatedDate,
        time: formatedTime,
        description,
      };

      setEventsList([...eventsList, formData]);
    }

    // Clear the form after save
    setEventName("");
    setDate(null);
    setTime(null);
    setDescription("");

    // Close modal
    onClose(false);
  };

  return (
    <div>
      <Dialog open={isFormOpen} onClose={() => onClose(false)}>
        <DialogTitle>Add Event Details</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="eventName"
            label="Event Name"
            type="text"
            fullWidth
            variant="standard"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          <DatePicker value={date} onChange={(value) => setDate(value)} />
          <TimePicker value={time} onChange={(value) => setTime(value)} />

          <TextField
            autoFocus
            margin="dense"
            id="eventDescription"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => onClose(false)}>Cancel</Button>
          <Button onClick={handleForm}>{isUpdating ? "Update" : "Save"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
