import { createContext, useContext, useEffect, useState } from "react";
import { getUserInformation } from "../client/requests";

const UserDataContext = createContext({
  userData: null,
  fetchUserData: () => {},
  setUserData: () => {},
});
export const useUserDataHandler = () => useContext(UserDataContext);

export const UserDataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  async function fetchUserData(id) {
    const res = await getUserInformation(id).then((res) => {
      console.log(res);
      setUserData(res.data);
      return res;
    });
  }

  return (
    <UserDataContext.Provider value={{ userData, fetchUserData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
