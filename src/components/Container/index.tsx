import React from 'react';

import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  height:100vh;
  background: linear-gradient(246.42deg, #2E1B57 17.1%, #1B2457 100%);
  display:flex;
  justify-content:center;
  position:relative;

  @media(max-width:300px){
    height:100%;
  }
`;
const ContainerWrapper: React.FC = ({children}) => {
  return <Container>{children}</Container>;
}

export default ContainerWrapper