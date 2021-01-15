import React from 'react';
import { useForm } from 'react-hook-form';
import InputLabelFloat from '../../components/InputLabelFloat';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import MainWrapper from '../../components/Main';
import HeaderWrapper from '../../components/Header';
import ContentWrapper from '../../components/Content';
import BoxContainer from '../../components/BoxContainer';
import ButtonWrapper from '../../components/Button';
import BoxMsg from '../../components/BoxMsg';


const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const SignIn: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <MainWrapper>
        <HeaderWrapper>
          <h2>Problemas para entrar?</h2>
          <span>Insira o seu email e enviaremos um link para você voltar a acessar a sua conta.</span>
        </HeaderWrapper>
        <ContentWrapper>
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

            <ButtonWrapper type="submit" name="Redefinir" />

            <BoxContainer style={{ margin: '2rem 0px 0px 0px' }}>
              <span>
                Lembrou a senha? <Link to="/">Retorne</Link>
              </span>
            </BoxContainer>
          </form>
        </ContentWrapper>
      </MainWrapper>
    </Container>
  );
};

export default SignIn;
