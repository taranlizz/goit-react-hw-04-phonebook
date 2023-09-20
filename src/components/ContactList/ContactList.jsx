import PropTypes from 'prop-types';
import { ContactListEl } from 'components/ContactListEl/ContactListEl';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListEl
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
