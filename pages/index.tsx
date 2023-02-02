import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import ReactPaginate from 'react-paginate';
import FeaturedPost from '../components/FeaturedPost';
import Launching from '../components/Launching';
import PageGrid from '../components/PageGrid';
import PostCard from '../components/PostCard';
import PostsGrid from '../components/PostsGrid';
import { Post } from '../core/models/@types/Post';
import PostService from '../core/services/PostService';

interface HomeProps {
  posts: Post.PostPaginated;
}

export default function Home(props: HomeProps) {
  const { posts } = props;
  if (posts?.totalRecords === 0) return <Launching></Launching>;

  return (
    <PageGrid>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {posts.content[0] && (
        <FeaturedPost postDetailed={posts.content[0]}></FeaturedPost>
      )}
      <PostsGrid>
        {posts?.content?.slice(1).map((post: Post.PostDetailed) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </PostsGrid>

      <ReactPaginate
        containerClassName={'Pagination'}
        pageCount={posts.totalRecords / posts.rows || 0}
        marginPagesDisplayed={0}
        pageRangeDisplayed={3}
        previousLabel={'<'}
        nextLabel={'>'}
        hrefBuilder={page => `/?page=${page}`}
        onPageChange={page => {
          Router.push(`/?page=${page.selected + 1}`);
        }}
      ></ReactPaginate>
    </PageGrid>
  );
}

function sendToHomePage() {
  return {
    redirect: {
      permanent: false,
      destination: '/?page=1',
    },
  };
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  query,
}: GetServerSidePropsContext) => {
  const { page: _page } = query;
  const page = _page ? Number(_page) : 1;
  if (isNaN(page) || page < 1) {
    return sendToHomePage();
  }

  const posts = await PostService.paginate({
    page: 0,
    rows: 10,
    order: 'createdAt,desc',
  });

  return {
    props: { posts },
  };
};
