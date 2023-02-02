import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageUpload from './ImageUpload';
import Loading from './Loading';
import MarkdownEditor from './MarkdownEditor';
import TagInput from './TagInput';
import PostService from '../core/services/PostService';
import info from '../core/utils/info';
import Input from './Input/Input';
import Button from './Button/Button';

interface PostFormProps {
  postId?: string;
}

export default function PostForm(props: PostFormProps) {
  const router = useRouter();
  const [tags, setTags] = useState<string[]>([]);
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');
  // const [imagesIds, setImagesIds] = useState(['']);

  const [publishing, setPublishing] = useState(false);

  async function insertNewPost() {
    const tagsCSV = tags.reduce((acc, curr) => acc + ',' + curr, '');
    const newPost = {
      body,
      title,
      imagesIds: ['15cbf48e-c7ed-4ec3-a65f-2a0f4759e9f1'],
      tags: tagsCSV.slice(1, tagsCSV.length + 1),
    };

    await PostService.insertNewPost(newPost);

    info({
      title: 'Post salvo com sucesso',
      description: `Você acabou de criar um post`,
    });
  }

  // async function updateExistingPost(postId: string) {
  //   const newPost = {
  //     body,
  //     title,
  //     imagesIds,
  //     tags: tags.map(tag => tag.text),
  //   };

  //   await PostService.updateExistingPost(postId, newPost);

  //   info({
  //     title: 'Post atualizado',
  //     description: `Você atualizou o post com sucesso`,
  //   });
  // }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setPublishing(true);

      // props.postId
      //   ? await updateExistingPost(props.postId)
      //   :
      await insertNewPost();

      router.push('/', { query: { page: 1 } });
    } finally {
      setPublishing(false);
    }
  }

  function fetchPost(postId: string) {
    PostService.getExistingPost(postId).then(post => {
      setTitle(post.title);
      // setImagesIds(post.images);
      setBody(post.body);
      setTags(post.tags.split(','));
    });
  }

  useEffect(() => {
    if (props.postId) {
      fetchPost(props.postId);
    }
  }, [props.postId]);

  return (
    <PostFormWrapper onSubmit={handleFormSubmit}>
      <Loading show={publishing} />
      <Input
        label='título'
        placeholder='e.g.: Como fiquei rico aprendendo React'
        value={title}
        onChange={(e: any) => setTitle(e.currentTarget.value)}
      />
      {/* <ImageUpload
        label='Thumbnail do post'
        onImageUpload={setImagesIds}
        preview={imagesIds}
      /> */}
      <MarkdownEditor onChange={setBody} value={body} />
      <TagInput
        tags={tags}
        onChange={setTags}
        placeholder='Insira as tags deste post'
      />
      <PostFormSubmitWrapper>
        <Button
          variant='primary'
          label='Salvar post'
          type='submit'
          disabled={!title || !body || !tags.length}
        />
      </PostFormSubmitWrapper>
    </PostFormWrapper>
  );
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
