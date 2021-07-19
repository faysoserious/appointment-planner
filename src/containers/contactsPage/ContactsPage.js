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
  useEffect(() => {
    const handleTextName = (e) => {
      setTextName(e.target.value);
    }
}, [textName]);
  const [textPhone, setTextPhone] = useState('');
  useEffect(() => {
    const handleTextPhone = (e) => {
      setTextPhone(e.target.value);
    }
}, [textPhone]);
  const [textEmail, setTextEmail] = useState('');
  useEffect(() => {
    const handleTextEmail = (e) => {
      setTextEmail(e.target.value);
    }
}, [textEmail]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    
    const condition = prevContacts.every((item) => item.name !== textName);
    if (condition) {
      console.log(prevContacts);

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
          onClick={handleSubmit}
          onTextName={( target ) => setTextName(target.value)}
          onTextPhone={( target ) => setTextPhone(target.value)}
          onTextEmail={( target ) => setTextEmail(target.value)}
          name={textName}
          phone={textPhone}
          email={textEmail}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts}/>
      </section>
    </div>
  );
};
