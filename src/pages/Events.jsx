import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar styles
import "./Events.css"; // Add your custom styles here

const Events = () => {
  const [selectedDates, setSelectedDates] = useState([]); // Array to hold multiple selected dates
  const [filteredDates, setFilteredDates] = useState([]); // Dates to filter events

  const events = [
    {
      date: "2024-12-05",
      title: "Tech Conference 2024",
      time: "10:00 AM",
      poster: "src/assets/logos/Eventsp1.jpg",
    },
    {
      date: "2024-12-10",
      title: "Art Exhibition",
      time: "3:00 PM",
      poster: "src/assets/logos/Events-2.jpg",
    },
    {
      date: "2024-12-15",
      title: "Music Fest",
      time: "7:00 PM",
      poster: "src/assets/logos/Eventsp3.jpg",
    },
    {
      date: "2024-12-18",
      title: "Dance Fest",
      time: "8:00 PM",
      poster: "src/assets/logos/Eventsp4.jpg",
    },
    {
      date: "2024-12-20",
      title: "Tech Fest",
      time: "9:00 PM",
      poster: "src/assets/logos/Eventsp5.jpg",
    },
  ];

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDates((prevDates) =>
      prevDates.includes(formattedDate)
        ? prevDates.filter((d) => d !== formattedDate) // Unselect if already selected
        : [...prevDates, formattedDate] // Add the selected date
    );
  };

  const handleApply = () => {
    setFilteredDates(selectedDates);
  };

  const handleClear = () => {
    setSelectedDates([]); // Clear selected dates
    setFilteredDates([]); // Reset filtered dates to show all events
  };

  const displayedEvents = filteredDates.length
    ? events.filter((event) => filteredDates.includes(event.date))
    : events; // Show all events if no dates are selected

  return (
    <div className="events-page">
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDates.length > 0 ? selectedDates.map((date) => new Date(date)) : []} // Use empty array when no dates are selected
          tileClassName={({ date }) =>
            selectedDates.includes(formatDate(date)) ? "selected-date" : "" // Highlight only selected dates
          }
          selectRange={false} // Prevent selecting date ranges
        />
        <div className="button-group">
          <button onClick={handleApply} className="apply-button">
            Apply
          </button>
          <button onClick={handleClear} className="clear-button">
            Clear
          </button>
        </div>
      </div>

      <div className="events-container">
        {displayedEvents.map((event, index) => {
          const eventDate = new Date(event.date);
          const currentDate = new Date();
          const isExpired = eventDate < currentDate; // Check if the event date is in the past

          return (
            <div key={index} className="event-card">
              <div className={`event-indicator ${isExpired ? "expired" : "available"}`}></div>
              <div className="event-date">
                {event.date} | {event.time}
              </div>
              <img src={event.poster} alt={event.title} />
              <h3>{event.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
