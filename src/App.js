import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {
      name: "Katty",
      phoneNumber: "123456",
      email: "thisMyEmail@gmail.com"
    }

  ]);
  const [appointments, setAppointments] = useState([{
    title: "MyFirstAppointments",
    contact: contacts,
    date: "DateMonthYear",
    time: "atXOclock"
  }]);


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContacts = ({ newContact }) => {
    const { name, phoneNumber, email } = newContact;
    setContacts((prev) => [
      newContact,
      ...prev
    ]);

  };

  const addAppointment = ({ newAppointment }) => {
    setAppointments((prev) => [
      newAppointment,
      ...prev
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage 
              value={contacts}
              onAddContacts={addContacts}
              />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              value={appointments}
              valueContacts={contacts}
              onAddAppointments={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
