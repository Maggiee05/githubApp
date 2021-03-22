import fetch from 'node-fetch';
import { access } from './auth_token';

export default class Profile {
  constructor() {
    // this.data = this.getProfile();
    this.data = null;
  }

  async getProfile() {
    const accessToken = access.token;
    const query = `
      query { 
        viewer { 
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
