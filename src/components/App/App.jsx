import { useEffect, useState } from 'react';
import { Layout } from '../LayoutComponent/Layout.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { AppTitle, ContactsTitle } from './App.styled';

const LS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem(LS_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const onContactFormSubmit = contact => {
    const isPresent = savedContact =>
      savedContact.name.toLowerCase() === contact.name.toLowerCase();

    if (contacts.some(isPresent)) {
      return alert(`${contact.name} is already in contacts.`);
    }

    setContacts(contacts => [...contacts, contact]);
  };

  const onContactFilterChange = evt => {
    setFilter(evt.target.value.toLowerCase());
  };

  const onContactDelete = contactID => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactID)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <Layout>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onSubmit={onContactFormSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactFilter onChange={onContactFilterChange} value={filter} />
      <ContactList contacts={filteredContacts} onDelete={onContactDelete} />
    </Layout>
  );
};
