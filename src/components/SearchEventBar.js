import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import EventTable from "./EventTable";
import EventForm from "./EventForm";

export default function PrimarySearchAppBar() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [eventsList, setEventsList] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleDeleteSelected = () => {
    const updatedEventsList = eventsList.filter(
      (event) => !selectedEvents.includes(event.id)
    );
    setEventsList(updatedEventsList);
    setSelectedEvents([]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="flex justify-end items-center p-2 gap-4">
        {selectedEvents.length > 0 && (
          <Button
            sx={{ backgroundColor: "red" }}
            variant="contained"
            disableElevation
            onClick={handleDeleteSelected}
          >
            Delete Selected
          </Button>
        )}

        <Button
          variant="contained"
          disableElevation
          sx={{ backgroundColor: "purple" }}
          onClick={() => setIsFormOpen(true)}
        >
          ADD NEW
        </Button>
      </div>

      <EventTable
        eventsList={eventsList}
        setEventsList={setEventsList}
        selectedEvents={selectedEvents}
        setSelectedEvents={setSelectedEvents}
      />

      <EventForm
        isFormOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        eventsList={eventsList}
        setEventsList={setEventsList}
      />
    </Box>
  );
}
