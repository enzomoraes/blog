import styled from 'styled-components';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../_constants';
import NotFoundImage from '../public/not_found.svg';
import Image from 'next/image';

export default function NotFound() {
  return (
    <Wrapper>
      <Image
        src={NotFoundImage}
        width={200}
        height={200}
        alt='não encontrado'
      ></Image>
      <small>
        <Link href='https://storyset.com/fun'>
          Fun illustrations by Storyset
        </Link>
      </small>
      <h1>Página não encontrada</h1>
      <BackToHome href='/'>Voltar para a Home</BackToHome>
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
