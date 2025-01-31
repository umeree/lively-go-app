import {createContext, useContext, useEffect, useState} from 'react';
import {getUserInformation} from '../client/requests';

const UserDataContext = createContext({
  userData: null,
  followings: null,
  followers: null,
  streams: null,
  fetchUserData: () => {},
  setUserData: () => {},
  ClearStates: () => {},
});
export const useUserDataHandler = () => useContext(UserDataContext);

export const UserDataContextProvider = ({children}) => {
  const [userData, setUserData] = useState(null);
  const [followings, setFollowings] = useState(null);
  const [followers, setFollowers] = useState(null);
  const [streams, setStreams] = useState(null);

  async function fetchUserData(id) {
    const res = await getUserInformation(id).then(res => {
      setUserData(res.data.user);
      setFollowers(res.data.followers);
      setFollowings(res.data.followings);
      setStreams(res.data.streams);
      return res;
    });
  }

  function ClearStates() {
    setUserData(null);
    setFollowers(null);
    setFollowings(null);
    setStreams(null);
  }

  return (
    <UserDataContext.Provider
      value={{
        userData,
        fetchUserData,
        setUserData,
        followings,
        followers,
        ClearStates,
        streams,
      }}>
      {children}
    </UserDataContext.Provider>
  );
};
