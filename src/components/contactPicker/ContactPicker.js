import React from "react";

export const ContactPicker = (props) => {
  const contactList = props.contactsList;
  console.log(contactList);
  return (

    <select onChange={props.onChange}>

      <option value="">Not select</option>
      {
        contactList.map((item) => {
          return (
            <option>
              {item.name}
            </option>
          )
        })
      }
    </select>
  );
};
