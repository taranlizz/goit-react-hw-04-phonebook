import { Component } from 'react';
import { Layout } from '../LayoutComponent/Layout.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { AppTitle, ContactsTitle } from './App.styled';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (contacts) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  onContactFormSubmit = contact => {
    const isPresent = savedContact =>
      savedContact.name.toLowerCase() === contact.name.toLowerCase();

    if (this.state.contacts.some(isPresent)) {
      return alert(`${contact.name} is already in contacts.`);
    }

    this.setState(state => ({
      contacts: [...state.contacts, contact],
    }));
  };

  onContactFilterChange = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  onContactDelete = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={this.onContactFormSubmit} />
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactFilter onChange={this.onContactFilterChange} value={filter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.onContactDelete}
        />
      </Layout>
    );
  }
}
