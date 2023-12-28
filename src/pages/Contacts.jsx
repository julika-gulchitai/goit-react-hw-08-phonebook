import React from 'react';
import { ContactList } from '../components/ContactList';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { Container, StyledTitle } from '../components/ContactForm.styled';

export const Contacts = () => {
  return (
    <Container>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm />
      {/* <StyledTitles>Contacts</StyledTitles> */}
      <Filter />
      <ContactList />
    </Container>
  );
};
