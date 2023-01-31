import { Paginate } from '../models/@types/Paginate';
import { Post } from '../models/@types/Post';
import generateQueryString from '../utils/generateQueryString';
import Service from './Service';

export default class PostService extends Service {
  static async paginate(query: Paginate.Query): Promise<Post.PostPaginated> {
    const queryString = generateQueryString(query);
    return this.Http.get<Post.PostPaginated>('/posts'.concat(queryString)).then(
      this.getData
    );
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
