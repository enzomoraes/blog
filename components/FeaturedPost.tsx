import Link from 'next/link';
import { transparentize } from 'polished';
import styled from 'styled-components';
import { Post } from '../core/models/@types/Post';
import formatPostDate from '../core/utils/formatPostDate';
import Avatar from './Avatar';

interface FeaturedPostProps {
  postDetailed: Post.PostDetailed;
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { slug, images } = props.postDetailed;
  return (
    <Wrapper href={`/posts/${slug}`}>
      <BgImage bg={`http://localhost:3000/images/${images[0].large}`} />
      <Content>
        <Tags>
          {props.postDetailed.tags.split(',').map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Editor>
          <Avatar src={'/enzo.jpeg'}></Avatar>
          <EditorDescription>
            <EditorName>{'Enzo'}</EditorName>
            <PostDate>{formatPostDate(props.postDetailed.createdAt)}</PostDate>
          </EditorDescription>
        </Editor>
        <Title>{props.postDetailed.title}</Title>
      </Content>
    </Wrapper>
  );
}

const Content = styled.div`
  z-index: 1;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 24px;
`;

const BgImage = styled.div<{ bg: string }>`
  background-image: url(${p => p.bg});
  object-fit: cover;
  position: absolute;
  inset: 0;
  background-color: blue;
  z-index: 0;
  opacity: 0.05;
`;

const Wrapper = styled(Link)`
  position: relative;
  background-color: ${p => p.theme.primaryBackground};
  color: ${p => p.theme.primaryForeground};
  border-radius: ${p => p.theme.borderRadius};

  overflow: hidden;

  display: flex;
  align-items: center;

  width: 100%;
  min-height: 256px;
  padding: 32px;

  text-decoration: none;

  transition: box-shadow 0.25s ease;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${p => transparentize(0.7, p.theme.primaryBackground)};
  }
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Tag = styled.li`
  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};
  border-radius: ${p => p.theme.borderRadius};

  text-transform: lowercase;
  padding: 4px 8px;
  cursor: default;
  font-size: 12px;
  font-weight: 700;
`;

const Editor = styled.div`
  display: flex;
  gap: 16px;
`;

const EditorDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PostDate = styled.p`
  font-size: 12px;
`;

const EditorName = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;
