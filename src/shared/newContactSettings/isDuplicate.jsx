export const isDuplicate = (newContact, contacts) => {
  const { name, number } = newContact;
  const result = contacts?.find(
    contactItem =>
      contactItem.name?.toLowerCase() === name.toLowerCase() &&
      contactItem.number === number
  );
  return result;
};
