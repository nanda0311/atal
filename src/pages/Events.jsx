import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import calendar styles
import "./Events.css"; // Add your custom styles here

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Initially null to show all events
  const events = [
    {
      date: "2024-12-05",
      title: "Tech Conference 2024",
      time: "10:00 AM",
      poster: "src/assets/Aboutpage/s1.jpg",
    },
    {
      date: "2024-12-10",
      title: "Art Exhibition",
      time: "3:00 PM",
      poster: "src/assets/Aboutpage/s2.jpg",
    },
    {
      date: "2024-12-15",
      title: "Music Fest",
      time: "7:00 PM",
      poster: "src/assets/Aboutpage/s3.jpg",
    },
  ];

  // Function to format date as YYYY-MM-DD in local timezone
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(formatDate(date)); // Use the formatted date
  };

  const displayedEvents = selectedDate
    ? events.filter((event) => event.date === selectedDate)
    : events; // Show all events if no date is selected

  return (
    <div className="events-page">
      <h1>Events Updates</h1>

      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate ? new Date(selectedDate) : new Date()} />
      </div>

      <div className="events-container">
        {displayedEvents.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-date">
              {event.date} | {event.time}
            </div>
            <img src={event.poster} alt={event.title} />
            <h3>{event.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
