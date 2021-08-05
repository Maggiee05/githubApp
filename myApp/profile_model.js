import fetch from 'node-fetch';
import token from './auth_token';

/**
 * The profile model class
 * Handling the fetch API for the profile screen
 */

export default class Profile {
  constructor() {
    this.data = null;
  }

  async getProfile(userid) {
    const accessToken = token;
    const query = `
      query GetQuery($userid: String!) { 
        user (login: $userid) { 
          avatarUrl
          name
          login
          bio
          websiteUrl
          email
          repositories(privacy: PUBLIC) {
              totalCount
          }
          followers {
              totalCount
          }
          following {
              totalCount
          }
          createdAt
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
      this.error = true;
      return console.error(error);
    }
  }
}
