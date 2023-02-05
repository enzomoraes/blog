import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import AuthService from '../../core/services/AuthService';
import info from '../../core/utils/info';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await AuthService.login(username, password);
      router.push('/');
    } catch (e: any) {
      info(e);
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          label='User'
          onChange={(e: any) => setUsername(e.currentTarget.value)}
        ></Input>
        <Input
          label='Senha'
          type='password'
          onChange={(e: any) => setPassword(e.currentTarget.value)}
        ></Input>
        <Button variant='primary' label='Enviar' type='submit'></Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;
