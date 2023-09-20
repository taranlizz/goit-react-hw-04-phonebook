import styled from 'styled-components';

export const Label = styled.label`
  display: inline-block;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  display: block;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: 0;
  margin-bottom: 5px;
  width: 350px;
  background-color: transparent;

  &:focus {
    border-color: #3366cc;
  }
`;
