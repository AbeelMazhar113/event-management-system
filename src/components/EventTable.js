import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EventForm from "./EventForm";

export default function EventTable(props) {
  const { eventsList, setEventsList, selectedEvents, setSelectedEvents } =
    props;

  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdateFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEdit = (eventToUpdate) => {
    setIsUpdating(true);

    setSelectedEvent(eventToUpdate);
    setIsEditFormOpen(true);
  };

  const handleDelete = (id) => {
    const updatedEventsList = eventsList?.filter((event) => event.id !== id);
    setEventsList(updatedEventsList);
    if (updatedEventsList) {
      alert("Deleted SuccessFully");
    }
  };

  const handleCheckboxChange = (event, id) => {
    const isCheckboxChecked = event.target.checked;

    if (isCheckboxChecked) {
      setSelectedEvents([...selectedEvents, id]);
    }

    if (!isCheckboxChecked) {
      setSelectedEvents(selectedEvents.filter((eventId) => eventId !== id));
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <h1>Hello this is only changes in dev branch</h1>

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Event</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {eventsList &&
              eventsList?.length > 0 &&
              eventsList?.map((event, index) => (
                <TableRow
                  key={event.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <input
                      type="checkbox"
                      id={`checkbox${index}`}
                      className="h-5 w-5"
                      onChange={(e) => handleCheckboxChange(e, event.id)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {event.eventName}
                  </TableCell>
                  <TableCell align="left">{event.date}</TableCell>
                  <TableCell align="left">{event.time}</TableCell>
                  <TableCell align="left">{event.description}</TableCell>
                  <TableCell align="left">
                    <div className="flex justify-start items-start gap-6">
                      <EditIcon
                        className="p-1 text-xl text-blue-500 cursor-pointer"
                        onClick={() => handleEdit(event)}
                      />

                      <DeleteIcon
                        className="p-1 text-xl text-red-500 cursor-pointer"
                        onClick={() => handleDelete(event.id)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>

          {eventsList?.length === 0 && (
            <TableBody>
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No events to display.
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>

      <EventForm
        isFormOpen={isUpdateFormOpen}
        onClose={() => setIsEditFormOpen(false)}
        isUpdating={isUpdating}
        event={selectedEvent}
        eventsList={eventsList}
        setEventsList={setEventsList}
      />
    </div>
  );
}
