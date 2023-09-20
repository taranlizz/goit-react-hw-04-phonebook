import PropTypes from 'prop-types';
import { Button, Item } from './ContactListEl.styled';

export const ContactListEl = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactListEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
