import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Button, ErrorDiv, FormEl, Input, Label } from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  number: Yup.string()
    .required('Required!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      '        Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = ({ onSubmit }) => {
  const nameInputID = nanoid();
  const numberInputID = nanoid();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(contact, actions) => {
        const name = contact.name.trim();
        onSubmit({ ...contact, name, id: nanoid() });
        actions.resetForm();
      }}
    >
      <FormEl>
        <Label htmlFor={nameInputID}>Name</Label>
        <Input name="name" id={nameInputID}></Input>
        <ErrorDiv name="name" component="div" />
        <Label htmlFor={numberInputID}>Number</Label>
        <Input name="number" id={numberInputID} type="tel"></Input>
        <ErrorDiv name="number" component="div" />
        <Button type="submit">Add contact</Button>
      </FormEl>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
