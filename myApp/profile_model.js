import fetch from 'node-fetch';
import { acc } from 'react-native-reanimated';

import token from './auth_token';
// import loading from './loading_screen';

/**
 * The profile model class
 * Handling the fetch API for the profile screen
 */

export default class Profile {
  constructor() {
    // this.data = this.getProfile();
    this.data = null;
    // this.accessToken = accessToken;
    this.loading = true;
    this.error = false;
    // this.state = {
    //   hidden: true,
    // }
  }

  async getProfile() {
    const accessToken = token;
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
      // this.setState({hidden:false});
      // this.loading = false;
      this.data = response;
      return response;
    } catch (error) {
      this.error = true;
      return console.error(error);
    }
  }
}
