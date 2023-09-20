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

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem(LS_KEY));
//     if (contacts) {
//       this.setState({
//         contacts,
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
//     }
//   }

//   onContactFormSubmit = contact => {
//     const isPresent = savedContact =>
//       savedContact.name.toLowerCase() === contact.name.toLowerCase();

//     if (this.state.contacts.some(isPresent)) {
//       return alert(`${contact.name} is already in contacts.`);
//     }

//     this.setState(state => ({
//       contacts: [...state.contacts, contact],
//     }));
//   };

//   onContactFilterChange = evt => {
//     this.setState({
//       filter: evt.target.value,
//     });
//   };

//   onContactDelete = contactId => {
//     this.setState(state => ({
//       contacts: state.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <Layout>
//         <AppTitle>Phonebook</AppTitle>
//         <ContactForm onSubmit={this.onContactFormSubmit} />
//         <ContactsTitle>Contacts</ContactsTitle>
//         <ContactFilter onChange={this.onContactFilterChange} value={filter} />
//         <ContactList
//           contacts={filteredContacts}
//           onDelete={this.onContactDelete}
//         />
//       </Layout>
//     );
//   }
// }
