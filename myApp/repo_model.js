import fetch from 'node-fetch';
import token from './auth_token';

/**
 * The repositories model class
 * Handling the fetch API for the repositories screen
 */

export default class Repo {
  constructor() {
    // this.accessToken = accessToken;
    this.data = null;
    this.loading = true;
  }

  async getRepo() {
    const accessToken = token;
    const query = `
            query { 
                viewer {
                    repositories(privacy: PUBLIC, first:100) {
                        nodes {
                            name
                            owner{
                                login
                            }
                            description
                        }
                    }
                }
            }`;
    try {
      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify({ query }),
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const response = await res.json();
      this.data = response;
      this.loading = false;
      return response;
    } catch (error) {
      return console.error(error);
    }
  }
}
