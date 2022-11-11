// react
import { useSelector } from 'react-redux';
// redux-components
import { selectContacts } from 'redux/contacts/contactsSelectors';
// components
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

//
export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <h1>Add new contact</h1>
      <ContactForm />

      {contacts?.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
        </>
      )}
      <ContactList />
    </>
  );
};
