import React from 'react';
import styled from 'styled-components';

export const Header = styled.header`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;

  >h2{
    font: 500 3.6rem Poppins;
    color:#fff;

  }
  >span{
    font:300 1.5rem Poppins;
    color:#A9A9B8;
  }
`;
const HeaderWrapper:React.FC = ({children})=>{
  return <Header>{children}</Header>
}


export default HeaderWrapper;