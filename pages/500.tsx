import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import InternalErrorImage from '../public/internal_error.svg';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../_constants';
export default function InternalError() {
  return (
    <Wrapper>
      <Head>
        <title>Erro interno - 500</title>
      </Head>
      <Image
        src={InternalErrorImage}
        width={200}
        height={200}
        alt='não encontrado'
      ></Image>
      <small>
        <Link href='https://storyset.com/fun'>
          Fun illustrations by Storyset
        </Link>
      </small>
      <h1>Erro interno</h1>
      <p>O estagiário desconectou um cabo errado</p>
      <BackToHome href='/'>Tentar acessar a Home</BackToHome>
    </Wrapper>
  );
}

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const BackToHome = styled(Link)`
  color: ${p => p.theme.primaryBackground};
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  min-height: calc(100vh) - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px;
`;
