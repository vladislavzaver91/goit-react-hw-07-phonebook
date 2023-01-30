import { ToastContainer } from "react-toastify";
import { ContactForm } from "../ContactForm";
import { Filter } from "../Filter";
import { ContactList } from '../ContactList';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </Container>
  )
}