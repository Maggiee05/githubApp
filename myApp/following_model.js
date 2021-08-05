import fetch from 'node-fetch';
import token from './auth_token';

/**
 * The followers model class
 * Handling the fetch API for the follower screen
 */

export default class Following {
  constructor() {
    this.data = null;
  }

  async getFollowing(userid) {
    const accessToken = token;
    const query = `
        query GetQuery($userid: String!){ 
            user (login: $userid) {
                following (first:100) {
                    nodes {
                        avatarUrl
                        name
                        login
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
