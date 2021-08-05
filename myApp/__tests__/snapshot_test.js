import React from 'react';
import renderer from 'react-test-renderer';
import FollowerScreen from '../follower_screen';
import FollowingScreen from '../following_screen';
import ProfileScreen from '../profile_screen';
import RepoScreen from '../repo_screen';

describe('App', () => {
  it('renders profile screen', async () => {
    const tree = renderer.create(<ProfileScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders repository screen', async () => {
    const tree = renderer.create(<RepoScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders follower screen', async () => {
    const tree = renderer.create(<FollowerScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  

  it('renders following screen', async () => {
    const tree = renderer.create(<FollowingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it ('Loading screen for follower', async () => {
  //   const inputControl = mount(<FollowerScreen />);
  //   expect(inputControl.html()).toBe('<Text>Loading...</Text>');
  //   // Let the event loop cycle so the callback queued by 'then' 
  //   // in 'componentDidMount()' has a chance to execute
  //   // await Promise.resolve();
  //   // expect(inputControl.html()).toBe('<div>The message: Message 1</div>');
  // });
  
});
