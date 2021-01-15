import React from 'react';

import styled from 'styled-components';

export const InputLabelFloat = styled.div`
  position:relative;
  width:100%;

  :not(:last-child){
    margin-bottom:2.5rem;
  }

  >label{
    pointer-events:none;
    position:absolute;
    font:400 1.8rem Poppins;
    color:#fff;
    top:1rem;
    left:0.2rem;
    transition:.4s;
  }
  >input{
    background-color: transparent;
    background-image: linear-gradient(to right,#ff005e 0,#ff7101 70%);
    background-repeat: no-repeat;
    background-position: 0 calc(100% + 3px),0 0;
    background-size: 100% 3px;
    box-shadow: none;
    border: 0;
    border-bottom: 3px solid #ff005e;
    outline: 0 none;
    padding: .5rem .2rem;
    width: 100%;
    height: 5rem;
    font:400 1.8rem Poppins;
    color: #fff;
    transition: .2s linear;


    &:hover,
    &:focus,
    &::placeholder,
    &:not(:placeholder-shown) {
      border-color: transparent;
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: 1.5rem;
      top: -1.3rem;
      color:#A9A9B8;
    }
  }
`;

const InputLFWrapper: React.FC = ({children}) => {
  return <InputLabelFloat>{children}</InputLabelFloat>;
}

export default InputLFWrapper;