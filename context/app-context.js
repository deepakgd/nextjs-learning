import React, { useState, useContext, useEffect } from "react";
import to from 'await-to-js';
import axios from "axios";
import router from 'next/router';
import api from '@utils/api';


const AppContext = React.createContext();

export const AppContextProvider = props => {

  return (
    <AppContext.Provider
      {...props}
      value={{}}
    />
  )
}


export const useAppContext = () => useContext(AppContext);
