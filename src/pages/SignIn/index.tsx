import React from 'react';
import { useForm } from 'react-hook-form';
import InputLabelFloat from '../../components/InputLabelFloat';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  Container,
  Main,
  Header,
  Content,
  BoxContainer,
  BoxMsg,
  Button,
} from './styles';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignIn: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
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
              <input
                name="email"
                type="text"
                ref={register({ required: true })}
                placeholder=" "
              />
              <label htmlFor="">E-mail</label>
              <BoxMsg>
                {errors.email && <span>Este campo é obrigatório</span>}
              </BoxMsg>
            </InputLabelFloat>

            <InputLabelFloat>
              <input
                name="password"
                type="password"
                ref={register({ required: true })}
                placeholder=" "
              />
              <label htmlFor="">Senha</label>
              <BoxMsg>
                {errors.password && <span>Este campo é obrigatório</span>}
              </BoxMsg>
            </InputLabelFloat>

            <BoxContainer>
              <span>
                Esqueceu a senha? <Link to="/reset">Redefina</Link>
              </span>
            </BoxContainer>
            <Button type="submit">Entrar</Button>

            <BoxContainer style={{ margin: '2rem 0px 0px 0px' }}>
              <span>
                Não possui uma conta? <Link to="/signup">Cadastre-se</Link>
              </span>
            </BoxContainer>
          </form>
        </Content>
      </Main>
    </Container>
  );
};

export default SignIn;
