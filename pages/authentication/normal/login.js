import { useState } from 'react';
import router, { useRouter } from 'next/router';
import to from 'await-to-js';
import nookies from 'nookies';

import NormalLogin from '@components/normal-login';
import { useAppContext } from '@context/app-context';
import api from '@utils/api';

export default function login() {

  const { setUser, setToken } = useAppContext();

  const [errors, setErrors] = useState(null);

  const handleSubmit = async (data) => {
    console.log(data);
    let [error, response] = await to(api.login(data));
    if(error) {
      console.log(error.response?.data.message[0]?.messages);
      return setErrors(error.response.data?.message[0]?.messages);
    }

    setUser(response.data.user);
    setToken(response.data.jwt);

    router.replace('/authentication/normal/profile');
  }

  const redirectToRegister = () => {
    router.replace('/authentication/normal/register');
  }

  return (
    <div>
      {errors && (
        <div className="alert alert-danger" role="alert">
          {errors.map((error, index) => {
            return <li key={'error_'+index}>{error.message}</li>
          })}
        </div>
      )}

      <NormalLogin onSubmit={handleSubmit} redirectToRegister={redirectToRegister} />
    </div>
  );
}


export async function getServerSideProps(context){

  const cookies = nookies.get(context);
  if (cookies?.jwt) return {
    redirect: {
      permanent: false,
      destination: '/authentication/normal/profile'
    }
  }

  return {
    props: {}
  }

}
