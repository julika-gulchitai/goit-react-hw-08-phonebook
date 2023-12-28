import React, { useEffect } from 'react';
import { ContactList } from '../../components/Contacts/ContactList';
import { ContactForm } from '../../components/Contacts/ContactForm';
import { Filter } from '../../components/Contacts/Filter';
import {
  Container,
  StyledTitle,
  StyledTitles,
} from '../../components/Contacts/ContactForm.styled';
import { Router } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/redux/contactsBookSlice';

// import {
//   selectFilter,
//   selectContacts,
//   selectError,
//   selectIsLoading,
// } from 'store/redux/selectors';
import { fetchContactsThunk } from 'store/redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContactsThunk());
  // }, [dispatch]);

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
