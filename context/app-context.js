import React, { useState, useContext } from "react";
import to from 'await-to-js';
import axios from "axios";
import router from 'next/router'


const AppContext = React.createContext();

export const AppContextProvider = props => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const logout = async () => {
    await axios.get('/api/logout');
    setToken(null);
    setUser(null);
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
