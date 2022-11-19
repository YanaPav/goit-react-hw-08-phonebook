export const validateContact = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Type name';
  } else if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
      values.name
    )
  ) {
    errors.name =
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  }
  if (!values.number) {
    errors.number = 'Type number';
  } else if (
    !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i.test(values.number)
  ) {
    errors.number =
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
  }
  return errors;
};
