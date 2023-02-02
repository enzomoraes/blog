import styled from 'styled-components';
import PostForm from '../../components/PostForm';

export default function CreatePost() {
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
