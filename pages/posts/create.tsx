import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import PostForm from '../../components/PostForm';
import AuthService from '../../core/services/AuthService';

export default function CreatePost() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const isAuth = async () => {
      try {
        await AuthService.isAuthenticated();
        setIsAuth(true);
      } catch (e) {
        return router.push('/not-found');
      }
    };
    isAuth();
  });

  if (!isAuth) {
    return <Loading show></Loading>;
  }

  return (
    <Wrapper>
      <Title>
        <h1>Novo Post</h1>
      </Title>
      <PostForm></PostForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  padding: 32px;
`;
