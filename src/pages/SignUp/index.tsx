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
  name: yup.string().required(),
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
      <MainWrapper >
        <HeaderWrapper>
          <h2>Cadastre-se</h2>
          <span>Efetue o cadastro e consiga gerenciar a sua conta.</span>
        </HeaderWrapper>
        <ContentWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabelFloat>
              <input
                name="name"
                type="text"
                ref={register({ required: true })}
                placeholder=" "
              />
              <label htmlFor="">Nome completo</label>
              <BoxMsg>
                {errors.name && <span>Este campo é obrigatório</span>}
              </BoxMsg>
            </InputLabelFloat>
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


            <ButtonWrapper type="submit" name="Cadastrar" />

            <BoxContainer style={{ margin: '2rem 0px 0px 0px' }}>
              <span>Já possui uma conta? <Link to="/">Acesse-a</Link></span>

            </BoxContainer>
          </form>
        </ContentWrapper>
      </MainWrapper>
    </Container>
  );
};

export default SignIn;
