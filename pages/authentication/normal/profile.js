import { useEffect } from 'react';
import to from 'await-to-js';
import router from 'next/router';
import { useAppContext } from '@context/app-context';
import api from '@utils/api';

export default function profile(){

  const { user, setUser, setToken } = useAppContext();

  useEffect(async () => {
    let [error, response] = await to(api.getProfile());
    if(error) return router.replace('/authentication/normal/login');
    setUser(response.data);
  }, [])


  return (
    <div>
      {user && (
        <>
          <h1>Welcome {user.username}</h1>
          <p><b>Email: </b>{user.email}</p>
        </>
      )}

    </div>
  )
}

