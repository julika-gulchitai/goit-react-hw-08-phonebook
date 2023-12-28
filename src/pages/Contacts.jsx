import React from 'react';
import { ContactList } from '../components/Contacts/ContactList';
import { ContactForm } from '../components/Contacts/ContactForm';
import { Filter } from '../components/Contacts/Filter';
import {
  Container,
  StyledTitle,
  StyledTitles,
} from '../components/Contacts/ContactForm.styled';

export const Contacts = () => {
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
