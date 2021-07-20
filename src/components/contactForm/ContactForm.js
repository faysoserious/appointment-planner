import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form className="AddContactForm" onSubmit={handleSubmit} >
            <input
                required
                type="text"
                aria-label="What's the contact's name?"
                placeholder="Name"
                value={name}
                onChange={setName}
            />
            <input
                required
                type="text"
                aria-label="What's the contact's name?"
                placeholder="12345678"
                value={phone}
                onChange={setPhone}
                pattern='^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$'
                title="Should only contain digits"
            />
            <input
                required
                type="email"
                
                aria-label="What's the contact's email address?"
                placeholder="sophie@example.com"
                value={email}
                onChange={setEmail}
            />
            <input type="submit" value="Add" />
        </form>
  );
};
