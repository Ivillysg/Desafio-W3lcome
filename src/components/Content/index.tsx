import React from 'react';
import styled from 'styled-components';

export const Content = styled.div`
  width:100%;
  height:50%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:5rem;

  >form{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:400px;

  }

`;


const ContentWrapper: React.FC = ({children}) => {
  return <Content>{children}</Content>;
}

export default ContentWrapper;