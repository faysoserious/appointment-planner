import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  /* const [newAppointment, setNewAppointment] = useState({
    title: '',
    contact: '',
    date: '',
    time: ''
  }); */
  const [title, setTitle] =useState('');
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const [contact, setContact] = useState('');
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const [date, setDate] = useState('');
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const [time, setTime] = useState('');
  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    }
    props.onAddAppointments(newAppointment);
    setTitle('');
    setContact('');
    setDate('');
    setDate('');


  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={props.contacts}
          title={title}
          setTitle={handleTitle}
          contact={contact}
          setContact={handleContact}
          date={date}
          setDate={handleDate}
          time={time}
          setTime={handleTime}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={props.value}/>
      </section>
    </div>
  );
};
