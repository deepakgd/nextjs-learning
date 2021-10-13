import { useState } from 'react';
import router, { useRouter } from 'next/router';
import to from 'await-to-js';
import api from '@utils/api';

import NormalRegister from '@components/normal-register';


export default function register() {

  const [errors, setErrors] = useState(null);

  const handleSubmit = async (data) => {
    console.log(data);
    let [error, response] = await to(api.register(data));
    if(error) {
      console.log(error.response.data.message[0]?.messages);
      return setErrors(error.response.data?.message[0]?.messages);
    }

    router.replace('/authentication/normal/login');
  }

  const redirectToLogin = () => {
    router.replace('/authentication/normal/login');
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

      <NormalRegister onSubmit={handleSubmit} redirectToLogin={redirectToLogin} />
    </div>
  );
}
