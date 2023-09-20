import styled from 'styled-components';

export const Item = styled.li`
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  margin-left: 12px;
  background-color: #3366cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #27408b;
  }
`;
