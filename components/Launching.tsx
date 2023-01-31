import styled from 'styled-components';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../_constants';
import LaunchingImage from '../public/launching.svg';
import Image from 'next/image';
import Head from 'next/head';

export default function Launching() {
  return (
    <Wrapper>
      <Head>
        <title>Novos conteúdos em breve</title>
      </Head>
      <Image
        src={LaunchingImage}
        width={200}
        height={200}
        alt='novos conteúdos em breve'
      ></Image>
      <small>
        <Link href='https://storyset.com/fun'>
          Fun illustrations by Storyset
        </Link>
      </small>
      <h1>Estamos apenas no início</h1>
    </Wrapper>
  );
}

const Link = styled.a`
  color: inherit;
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
