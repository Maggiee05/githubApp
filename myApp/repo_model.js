import fetch from 'node-fetch';
import token from './auth_token';

/**
 * The repositories model class
 * Handling the fetch API for the repositories screen
 */

export default class Repo {
  constructor() {
    this.data = null;
  }

  async getRepo(userid) {
    const accessToken = token;
    const query = `
        query RepoQuery($userid: String!){ 
            user (login: $userid) {
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
        body: JSON.stringify({
          query,
          variables: { userid },
        }),
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
