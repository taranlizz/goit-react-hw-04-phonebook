import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  margin-bottom: 40px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 10px 3px;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Input = styled(Field)`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: 0;
  margin-bottom: 5px;
  width: 100%;
  background-color: transparent;

  &:focus {
    border-color: #3366cc;
  }

  &:last-of-type {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  background-color: #3366cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #27408b;
  }
`;

export const ErrorDiv = styled(ErrorMessage)`
  font-size: 20px;
  color: red;
  margin-bottom: 10px;
`;
