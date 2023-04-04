/*
Entry point of the SDK
It exports a Library class that acts as a central point of access to all the resources. 
The constructor of this class takes a config object that contains the apiKey and baseUrl. 
The apiKey is used for authentication and the baseUrl is used to specify the base URL for 
the API endpoints. This class creates instances of the Posts and Users classes and makes 
them available as properties.
*/
import { Base } from "./base";
import { Posts } from "./resources/posts";
import { Users } from "./resources/users";
import { applyMixins } from './utils';

class Library extends Base {};

interface Library extends Posts {};

applyMixins(Library, [Posts, Users]);

export default Library;