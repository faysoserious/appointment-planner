import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList"
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const prevContacts = props.value;


  const [textName, setTextName] = useState('');
  
  const handleTextName = (e) => {
    setTextName(e.target.value);
  };
  
  const [textPhone, setTextPhone] = useState('');
  const handleTextPhone = (e) => {
    setTextPhone(e.target.value);
  };
  
  const [textEmail, setTextEmail] = useState('');
  const handleTextEmail = (e) => {
    setTextEmail(e.target.value);
  };

  /* const [newContacts, setNewContacts] = useState({
    name: textName,
    phoneNumber: textPhone,
    email: textEmail
  }); */


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    
    const condition = prevContacts.every((item) => item.name !== textName);
    if (condition) {
      

      const newContacts = {
        name: textName,
        phoneNumber: textPhone,
        email: textEmail
      };

      

      props.onAddContacts(newContacts);

      setTextName('');
      setTextEmail('');
      setTextPhone('');
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={textName}
          setName={handleTextName}
          phone={textPhone}
          setPhone={handleTextPhone}
          email={textEmail}
          setEmail={handleTextEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.value} />
      </section>
    </div>
  );
};
