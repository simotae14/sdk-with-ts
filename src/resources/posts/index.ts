/*
Post class define different methods to:
 - 
*/
import { Base } from '../base';
import { Post, NewPost } from './types';

const resourceName = 'posts';

export class Posts extends Base {
  // retrieve post by id
  getPostById(id: number): Promise<Post> {
    return this.request(`${resourceName}/${id}`);
  }

  // retrieve all the posts
  getPosts(): Promise<Post[]> {
    return this.request(`${resourceName}`);
  }

  // create post
  createPost(newPost: NewPost): Promise<Post> {
    return this.request(
      `${resourceName}`,
      {
        method: 'POST',
        body: JSON.stringify(newPost),
      }
    )
  }
}