import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  height:100vh;
  background: linear-gradient(246.42deg, #2E1B57 17.1%, #1B2457 100%);
  display:flex;
  justify-content:center;
  position:relative;

  @media(max-width:1000px){
    height:100%;
  }
`;

export const Main = styled.main`
  margin-top:1.5rem;
  width:90%;
  max-width:650px;
  padding:1rem 1rem;
  display:flex;
  align-items:center;
  flex-direction:column;
  animation-name: fadeInRight;
  animation-duration: .4s;
  position: relative;

  @keyframes fadeInRight {
    0% {
      opacity:0;
      right:-300px;
    }

    100% {
      right:0px;
      opacity:1;


    }
  }
`;

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
    padding:0 2rem;
  }
`;

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



export const BoxContainer = styled.div`
  margin-bottom:2rem;

  span{
    font:400 1.5em Poppins;
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

export const BoxMsg = styled.div`
  width:100%;
  padding:1rem 0rem;
  span{
    font:400 1.2rem Poppins;
    color:#FF4646;
  }
`;


export const Button = styled.button`
  width:210px;
  height:50px;
  border-radius:30px;
  border:0;
  font:500 2rem Poppins;
  color:#fff;
  text-transform:uppercase;
  background:#ff005e;
  cursor: pointer;
  transition:.4s;

  &:hover{
    background:#b30041 ;
  }
`;
