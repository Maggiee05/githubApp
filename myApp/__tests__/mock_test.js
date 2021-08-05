import Follower from '../follower_model';
import Following from '../following_model';
import Profile from '../profile_model';
import Repo from '../repo_model';

beforeEach( () => {
  fetch.resetMocks();
});

afterEach( () => {
  fetch.mockClear();
});

test('returns correct name of the profile', async () => {
    fetch.mockResponseOnce(JSON.stringify(
           [{ 
             name: "Maggie Chen"
          }])
    );
    const onResponse = jest.fn();
    const onError = jest.fn();
    const newProfile = new Profile();

    return newProfile.getProfile("Maggiee05")
      .then(onResponse)
      .catch(onError)
      .finally(() => {
        expect(onResponse).toHaveBeenCalled();
        expect(onError).not.toHaveBeenCalled();
        expect(onResponse.mock.calls[0][0].data.user.name).toEqual("Maggie Chen");
      });
  });

test('returns correct name of the repo', async () => {
  fetch.mockResponseOnce(JSON.stringify(
          [{
          name: "Lab10",
          owner: {
            login: "Maggiee05"
          }
        }])
  );
  const onResponse = jest.fn();
  const onError = jest.fn();
  const newRepo = new Repo();

  return newRepo.getRepo("Maggiee05")
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
      expect(onResponse.mock.calls[0][0].data.user.repositories.nodes[0].name).toEqual("Lab10");
    });
});

test('returns correct name of the follower', async () => {
  fetch.mockResponseOnce(JSON.stringify(
          [{
            name: "Wangying Yang",
            login: "Azureyy"
        }])
  );
  const onResponse = jest.fn();
  const onError = jest.fn();
  const newFollower = new Follower();

  return newFollower.getFollowers("Maggiee05")
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
      expect(onResponse.mock.calls[0][0].data.user.followers.nodes[1].login).toEqual("Azureyy");
    });
});

test('returns correct name of the following', async () => {
  fetch.mockResponseOnce(JSON.stringify(
          [{
            name: "Ruikang Zhao",
            login: "ruikang2"
        }])
  );
  const onResponse = jest.fn();
  const onError = jest.fn();
  const newFollowing = new Following();

  return newFollowing.getFollowing("Maggiee05")
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
      expect(onResponse.mock.calls[0][0].data.user.following.nodes[0].login).toEqual("ruikang2");
    });
});