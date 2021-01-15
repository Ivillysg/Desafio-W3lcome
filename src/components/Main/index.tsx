import React from 'react';
import styled from 'styled-components';

export const Main = styled.main`
  margin-top:5rem;
  width:90%;
  max-width:650px;
  padding:1rem 1rem;
  display:flex;
  align-items:center;
  flex-direction:column;
  animation-name: fadeInLeft;
  animation-duration: .4s;
  position: relative;

  @keyframes fadeInLeft {
    0% {
      left:-300px;
      opacity:0;
    }

    100% {
      left:0px;
      opacity:1;

    }
  }
`;
const MainWrapper: React.FC = ({children}) => {
  return <Main>{children}</Main>;
}

export default MainWrapper;