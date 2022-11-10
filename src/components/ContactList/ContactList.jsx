import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { fetch } from 'redux/contacts/contactsOperations';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectFilter } from 'redux/filter/filterSelectors';
import {
  selectContacts,
  selectLoading,
  selectContactsError,
} from 'redux/contacts/contactsSelectors';
import { StyledList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectContactsError);

  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  const filtredContacts = contacts?.filter(({ name }) =>
    name?.toLowerCase().includes(filterValue?.toLowerCase())
  );

  return (
    <>
      {error?.type === 'fetch' && <div>{error.message}</div>}
      {isLoading === 'fetch' && <CircularProgress />}
      {contacts && (
        <StyledList>
          {filtredContacts?.map(({ name, number, id }) => {
            return <ContactItem key={id} name={name} number={number} id={id} />;
          })}
        </StyledList>
      )}
    </>
  );
};
