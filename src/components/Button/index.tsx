import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
  width: 210px;
  height: 50px;
  border-radius: 30px;
  border: 0;
  font: 500 2rem Poppins;
  color: #fff;
  text-transform: uppercase;
  background: #ff005e;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: #b30041;
  }
`;

interface Props {
  type?: any;
  name?: string;
}

const ButtonWrapper: React.FC<Props> = ({ type="button", name }) => {
  return <Button type={type}>{name}</Button>;
};

export default ButtonWrapper;
