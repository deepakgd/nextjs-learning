import { useEffect } from 'react';
import nookies from 'nookies';
import to from 'await-to-js';
import axios from 'axios';
import router from 'next/router';
import { useState } from 'react';
import { useAppContext } from '@context/app-context';
import api from '@utils/api';

export default function profile({ user, token }){

  const { setUser, setToken } = useAppContext();

  useEffect(() => {
    setUser(user);
    setToken(token);
    return () => {
      console.log('unmounting...')
    }
  }, [])


  return (
    <div>
      <h1>Welcome {user.username}</h1>
      <p><b>Email: </b>{user.email}</p>
    </div>
  )
}


export async function getServerSideProps(context){
  let cookies = nookies.get(context);
  if(cookies?.jwt){
    let [error, response] = await to(axios.get(`${process.env.API_BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${cookies.jwt}`
      }
    }));
    if(error) {
       console.log(error.response.data);
       return{
         props: {
           error: error.response?.data?.message
         }
       }
      // return setErrors(error.response.data?.message[0]?.messages);
    }

    console.log(response.data)

    return  {
      props: {
        user: response.data,
        token: cookies.jwt
      }
    }
  }else return {
    redirect: {
      permanent: false,
      destination: '/authentication/normal/login'
    }
  }
}
