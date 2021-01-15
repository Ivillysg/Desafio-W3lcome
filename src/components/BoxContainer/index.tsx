import React from 'react';

import styled from 'styled-components';


const Container = styled.div`
  margin-bottom:2rem;

  span{
    font:400 1.42em Poppins;
    color:#a4a4a4;
    margin-right:.5rem;

    a{
      color:#fff;
      cursor:pointer;
      text-decoration:none;

      &:hover{
        text-decoration:underline;
      }
    }
  }

`;
interface Props{
  style?:React.CSSProperties;
  children:React.ReactNode;
}

const BoxContainer: React.FC<Props> = ({children,style}) => {
  return <Container style={style}>{children}</Container>;
}

export default BoxContainer;