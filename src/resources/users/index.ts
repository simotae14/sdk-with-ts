/*
Users class define different methods to:
 - retrieve a user by its id
 - retrieve all the users
 - create a new user
*/
import { Base } from '../base';
import { User, NewUser } from './types';

const resourceName = 'users';

export class Users extends Base {
  // retrieve user by id
  getUserById(id: number): Promise<User> {
    return this.request(`/${resourceName}/${id}`);
  }

  // retrieve all the users
  getUsers(): Promise<User[]> {
    return this.request(`/${resourceName}`);
  }

  // create user
  createPost(newUser: NewUser): Promise<User> {
    return this.request(
      `/${resourceName}`,
      {
        method: 'POST',
        body: JSON.stringify(newUser),
      }
    )
  }
}