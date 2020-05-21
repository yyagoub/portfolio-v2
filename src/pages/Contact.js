import React from 'react';
import { contacts } from '../constants/contacts';

function createContacts(contacts) {
  return contacts.map((contact) => {
    if (contact.desc === undefined) return null;
    return (
      <>
        <span>{contact.desc}</span>
        <ul>
          <a href={contact.url} style={{ color: 'white' }}>
            {contact.name}
          </a>
        </ul>
        <br />
      </>
    );
  });
}

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <br />
      {createContacts(contacts)}
    </div>
  );
}
