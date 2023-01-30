import { Post } from '../models/@types/Post';
import { PostPaginated } from '../models/Post';

export default class PostService {
  static async getAllPosts({ page }: { page: number }): Promise<PostPaginated> {
    return {
      content: [
        {
          id: '1',
          title: 'Como aprender CSS e Javascript',
          slug: 'string',
          tags: 'javscript,css',
          body: 'Lorem Ipsum',
          images: [
            {
              id: '1',
              medium: '/laptop.jpeg',
              small: '/laptop.jpeg',
              large: '/laptop.jpeg',
            },
          ],
          createdAt: new Date().toDateString(),
        },
        {
          id: '2',
          title: 'Como aprender Spring Boot',
          slug: 'string',
          tags: 'java,spring boot',
          body: 'Lorem Ipsum',
          images: [
            {
              id: '1',
              medium: '/laptop.jpeg',
              small: '/laptop.jpeg',
              large: '/laptop.jpeg',
            },
          ],
          createdAt: new Date().toDateString(),
        },
      ],
    };
  }

  static async getExistingPost(postId: string): Promise<Post.PostDetailed> {
    return {
      id: '1',
      title: 'Como aprender CSS e Javascript',
      slug: 'string',
      tags: 'javascript,css',
      body: 'texto em markdown aqui',
      images: [
        {
          id: '1',
          medium: '/laptop.jpeg',
          small: '/laptop.jpeg',
          large: '/laptop.jpeg',
        },
      ],
      createdAt: new Date().toDateString(),
    };
  }
}
