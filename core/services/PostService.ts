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

  static insertNewPost(newPost: Post.PostCreate) {
    return this.Http.post('/posts', newPost, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW56byIsInJvbGVzIjpbImNyZWF0ZTpwb3N0Il0sImlhdCI6MTY3NTI5NDkwNiwiZXhwIjoxNjc1MzgxMzA2fQ.Dxn1DaaaLOv5fCns1HCWBfa1HvbPzeJsMR9XOpS5yGk',
      },
    }).then(this.getData);
  }

  static async getExistingPostBySlug(slug: string): Promise<Post.PostDetailed> {
    return this.Http.get(`/posts/${slug}`).then(this.getData);
  }
}
