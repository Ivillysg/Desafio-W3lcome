import React from 'react';
import { useForm } from 'react-hook-form';
import InputLabelFloat from '../../components/InputLabelFloat';

import {
  Container,
  Main,
  Header,
  Content,
  BoxContainer,
  Button,
} from './styles';

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <Main>
        <Header>
          <h2>Acessar Painel</h2>
          <span>Olá! Efetue o login e comece a gerenciar a sua conta.</span>
        </Header>
        <Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabelFloat>
              <input name="user" type="text" ref={register} placeholder=" " />
              <label htmlFor="">Usuário</label>
            </InputLabelFloat>
            <InputLabelFloat>
              <input
                name="password"
                type="password"
                ref={register}
                placeholder=" "
              />
              <label htmlFor="">Senha</label>
            </InputLabelFloat>
            <BoxContainer>
              <span>Esqueceu a senha?</span>
              <span>Redefina</span>
            </BoxContainer>
            <Button type="submit">Entrar</Button>

            <BoxContainer style={{margin:'3rem 0px 0px 0px'}}>
              <span>Não tem uma conta?</span>
              <span>Cadastre-se</span>
            </BoxContainer>
          </form>
        </Content>
      </Main>
    </Container>
  );
};

export default SignIn;
