import fetch from 'node-fetch';
import { access } from './auth_token';

export default class Repo {
  constructor() {
    this.data = null;
  }

  async getRepo() {
    const accessToken = access.token;
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
      return response;
    } catch (error) {
      return console.error(error);
    }
  }
}
