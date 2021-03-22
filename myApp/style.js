import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#f0e68c',
    // dcdcdc
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '8%',
    marginTop: '6%',
  },
  space: {
    width: 20,
    height: 20,
  },
  profileName: {
    marginTop: '8%',
    fontSize: 25,
    fontWeight: 'bold',
  },
  profileNameSub: {
    marginTop: '3%',
    fontSize: 20,
    color: '#808080',
  },
  infoText: {
    marginTop: '5%',
    marginBottom: '5%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  repoName: {
    marginTop: '3%',
    marginLeft: '8%',
    fontSize: 23,
    fontWeight: 'bold',
  },
  repoOwner: {
    marginTop: '1%',
    marginLeft: '8%',
    fontSize: 18,
    color: '#696969',
  },
  repoText: {
    marginTop: '3%',
    marginBottom: '3%',
    marginLeft: '8%',
    fontSize: 15,
    color: '#808080',
  },
  repoTab: {
    marginTop: '2%',
    borderRadius: 100,
    backgroundColor: '#dcdcdc',
  },
});
