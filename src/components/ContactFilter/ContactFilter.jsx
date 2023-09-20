import PropTypes from 'prop-types';
import { Input, Label } from './ContactFilter.styled';

export const ContactFilter = ({ onChange, value }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={onChange} value={value} />
    </Label>
  );
};

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
