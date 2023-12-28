import { StyledBtn, StyledContacts } from './ContactForm.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'store/contacts/operations';

export const ContactElem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledContacts>
        {name}: {number}
        <StyledBtn
          type="button"
          onClick={() => dispatch(deleteContactsThunk(id))}
        >
          Delete
        </StyledBtn>
      </StyledContacts>
    </>
  );
};
