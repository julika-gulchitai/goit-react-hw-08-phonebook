import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { Container, StyledTitle, StyledTitles } from './ContactForm.styled';

export const App = () => {
  return (
    <Container>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm />
      <StyledTitles>Contacts</StyledTitles>
      <Filter />
      <ContactList />
    </Container>
  );
};
