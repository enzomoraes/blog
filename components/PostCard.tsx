import Image from 'next/image';
import Link from 'next/link';
import { transparentize } from 'polished';
import styled from 'styled-components';
import { Post } from '../core/models/@types/Post';
import formatPostDate from '../core/utils/formatPostDate';

interface PostCardProps {
  post: Post.PostDetailed;
}
export default function PostCard(props: PostCardProps) {
  const { post } = props;
  return (
    <Wrapper href={`/posts/${post.id}/${post.slug}`}>
      <Thumbnail bg={'/laptop.jpeg'} />
      <Info>
        <Editor>
          <EditorImage
            src={'/enzo.jpeg'}
            width={64}
            height={64}
            alt=''
          ></EditorImage>
        </Editor>
        <PublishDate>{formatPostDate(post.createdAt)}</PublishDate>
        <Title>{post.title}</Title>
      </Info>
    </Wrapper>
  );
}

const Thumbnail = styled.div<{ bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;

  background-image: url(${p => p.bg});
  background-position: center;
  background-size: cover;

  border-top-left-radius: ${p => p.theme.borderRadius};
  border-top-right-radius: ${p => p.theme.borderRadius};
`;

const Info = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  height: 50%;
  left: 0;

  margin-top: -32px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Editor = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 32px;
  width: 64px;
  height: 64px;

  box-shadow: 0 0 0 4px ${p => p.theme.activeElementBackground};
`;

const EditorImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

const PublishDate = styled.p`
  font-size: 12px;
  color: ${p => transparentize(0.5, p.theme.activeElementForeground)};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 14px;
`;

const Wrapper = styled(Link)`
  text-decoration: none;

  position: relative;
  min-height: 256px;

  background-color: ${p => p.theme.activeElementBackground};
  color: ${p => p.theme.activeElementForeground};
  border-radius: ${p => p.theme.borderRadius};
  box-shadow: 0 3px 6px
    ${p => transparentize(0.9, p.theme.activeElementForeground)};

  transition: 0.25s ease;

  * {
    transition: 0.25s ease;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.primaryBackground};
    box-shadow: 0 0 0 4px ${p => transparentize(0.7, p.theme.primaryBackground)};
    * {
      color: ${p => p.theme.primaryForeground};
    }
    outline: none;

    ${Thumbnail} {
      height: 100%;
      opacity: 0.1;
    }
  }
`;
