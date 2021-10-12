import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import NormalRegister from '@components/normal-register';


export default function register() {

  return (
    <div>
      <NormalRegister />
    </div>
  );
}
