import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import Markdown from '../../../components/Markdown';
import PostHeader from '../../../components/PostHeader';
import { Post } from '../../../core/models/@types/Post';
import PostService from '../../../core/services/PostService';

export default function PostPage(props: PostProps) {
  const { post } = props;
  const pageTitle = `${post?.title} - Nome do Site`;
  return (
    <>
      <Head>
        {/* Open graph - pre visualizacao do site */}
        <meta property='og:title' content={post?.title} />
        <meta property='og:site_name' content='emper' />
        <meta property='og:url' content='dnshere' />
        <meta property='og:description' content={post?.body.slice(0, 54)} />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={'TODO ajustar'} />
        <title>{pageTitle}</title>
        <link
          rel='canonical'
          href={`http://localhost:3000/posts/${post?.id}/${post?.slug}`}
        />
      </Head>
      {post && (
        <PostHeader
          createdAt={new Date().toDateString()}
          thumbnail={'/laptop.jpeg'}
          title={post?.title}
        ></PostHeader>
      )}
      {post?.body && <Markdown>{post.body}</Markdown>}
    </>
  );
}

interface PostProps extends NextPageProps {
  post?: Post.PostDetailed;
  host?: string;
}

interface Params extends ParsedUrlQuery {
  id: string;
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
  PostProps,
  Params
> = async ({ params, req }) => {
  try {
    if (!params) return { notFound: true };

    const { id } = params;

    const post = await PostService.getExistingPost(id);

    return {
      props: { post, host: req.headers.host },
    };
  } catch (error: any) {
    return {
      props: {
        error: {
          message: error.message,
          statusCode: error.data?.status || 500,
        },
      },
    };
  }
};
