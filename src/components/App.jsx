import { Component } from "react";
import { ContactsForm } from "./ContactsForm/contactsForm";
import ContactList from "./ContactsList/contactsList";
import Filter from "./Filter/filter";
import { Section, Title, SectionHeading } from "./GlobalStyles.styled";

export class App extends Component{

state = {
  contacts: [],
  filter: '',
}

  componentDidMount() {
    console.log('componentDidMount');
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    } else {
      this.setState({
        contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
      })
    }

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      
    }
  }

  addNewContact = (newContact, { actions }) => {
    const { contacts } = this.state;
    const existName = contacts.map(el => el.name.toLowerCase());

    return existName.includes(newContact.name.toLowerCase()) ?
      alert(`${newContact.name} is already in contacts`):
      this.setState(prevState => {
        actions.resetForm();
        return {
          contacts: [...prevState.contacts, newContact]
        }
      
      })
    
  }

  getVisibleContact = () => {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  delContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const getVisibleContact = this.getVisibleContact();
    
    return (
      <Section>
        <Title>Phonebook</Title>
        <ContactsForm
          onSubmit={ this.addNewContact } />
      
        <SectionHeading>Contacts</SectionHeading>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={getVisibleContact}
          onDelete={ this.delContact } />
    </Section>
    )
  }
}


