import { useDispatch, useSelector } from 'react-redux';
import { ContactElem } from './ContactElem';
import { ContactsWrap, StyledContactsList } from './ContactForm.styled';
import { createSelector } from '@reduxjs/toolkit';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'store/redux/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'store/redux/operations';
import { Loader } from 'components/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filterValue) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
  );
  const contacts = useSelector(filteredContacts);
  return (
    <ContactsWrap>
      {contacts.length === 0 ? (
        <p></p>
      ) : (
        <ul>
          <StyledContactsList>
            {contacts.map(contact => (
              <ContactElem key={contact.id} {...contact} />
            ))}
          </StyledContactsList>
        </ul>
      )}
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
    </ContactsWrap>
  );
};
