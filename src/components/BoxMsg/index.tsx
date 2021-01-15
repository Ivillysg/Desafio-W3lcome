import React from 'react';

import styled from 'styled-components';

const BoxMsg = styled.div`
  width:100%;
  padding:1rem 0rem;
  span{
    font:400 1.2rem Poppins;
    color:#FF4646;
  }
`;


const BoxMessage: React.FC = ({children}) => {
  return <BoxMsg>{children}</BoxMsg>;
}

export default BoxMessage;