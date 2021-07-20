import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";


export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Title"
        value={title}
        onChange={setTitle}
      />
      <input
        type="time"
        value={time}
        onChange={setTime} />
      <input
        type="date"
        min={getTodayString()}
        value={date}
        onChange={setDate}
      />
      
      <ContactPicker 
        contactsList={contacts}
        onChange={setContact}/>

      <input type="submit" value="Add" />
    </form>
  );
};
