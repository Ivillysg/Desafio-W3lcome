import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html,body{
    height:100vh;
  }

  :root{
    font-size:62.5%;
  }
`;