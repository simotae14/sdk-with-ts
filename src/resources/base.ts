/*
The Base class is an abstract class that provides common functionality for all resources 
in our SDK. It takes in a Config object with apiKey and baseUrl properties in its 
constructor which is common and needed for API invocation. 
The request the method is used to make HTTP requests to the API. 
This method takes in an endpoint and an optional RequestInit the object for additional configuration. 
The method returns a Promise with the response data of the type T.
*/
import fetch from 'isomorphic-unfetch';
// define a Type for the Config object
type Config = {
  apiKey: string;
  baseUrl?: string;
}

export abstract class Base {
  // define some private attributes
  private apiKey: string;
  private baseUrl: string;

  // define the constructor
  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || 'https://jsonplaceholder.typicode.com';
  }

  // create a request method which returns an API
  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    // define the url
    const url = `${this.baseUrl}${endpoint}`;
    // define the Headers of the request
    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.apiKey,
    };

    // define the config object for the request
    const config = {
      ...options,
      headers,
    };

    // call the API
    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // if the response is not ok throw an error
        throw new Error(response.statusText);
      }
    });
  }
}