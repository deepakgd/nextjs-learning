import React, { useState, useContext, useEffect } from "react";
import to from 'await-to-js';
import axios from "axios";
import router from 'next/router';
import api from '@utils/api';


const AppContext = React.createContext();

export const AppContextProvider = props => {
  const [user, setUser] = useState({
    isLoading: true
  });
  const [token, setToken] = useState(null);

  useEffect(async () => {
    let [error, response] = await to(api.getProfile());
    if(error) return setUser({ isLoading: false });
    setUser({ ...response.data, isLoading: false });
  }, [])

  const logout = async () => {
    setUser({ isLoading: false });
    await api.logout();
    router.push("/");
  }

  return (
    <AppContext.Provider
      {...props}
      value={{
        user,
        setUser,
        logout,
        token,
        setToken
      }}
    />
  )
}


export const useAppContext = () => useContext(AppContext);
