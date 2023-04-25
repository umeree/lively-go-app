import { StyleSheet } from 'react-native';

export const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  followers: {
    fontSize: 20,
    color: '#000000',
  },
  wallet: {
    fontSize: 20,
    color: '#000000',
  },
  profilePicContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    margin: 20,
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  settingsButton: {
    width: '80%',
    padding: 20,
    backgroundColor: '#0000ff',
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  settingsText: {
    fontSize: 20,
    color: '#ffffff',
  },
});
