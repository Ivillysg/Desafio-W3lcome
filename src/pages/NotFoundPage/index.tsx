import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import HeaderWrapper from '../../components/Header';

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <HeaderWrapper>
          <h1 style={{font:'500 10rem Poppins',color:"#fff"}}>404</h1>
          <span style={{font:'300 2.5rem Poppins',color:"#fff"}} >Essa pagina não existe!</span>
          <Link to="/" style={{font:'300 2rem Poppins',color:"#a4a4a4"}} >Voltar</Link>
        </HeaderWrapper>
    </Container>
  );
};

export default NotFoundPage;
