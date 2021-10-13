import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import styles from './styles.module.css';

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter user name or email address"),
  password: yup.string().required("Please enter password"),
});


export default function NormalLogin({ onSubmit, redirectToRegister }) {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = data => onSubmit(data);

  return (
      <div className="container px-5 my-5">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-3">
            <label className="form-label" htmlFor="emailAddress">
              User Name/Email address
            </label>
            <input
              className="form-control"
              { ...register("identifier") }
              placeholder="Enter User Name/Email address"
            />
            <div className={styles.formError}>
              {errors.identifier?.message}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              id="password"
              type="password"
              placeholder="Password"
              { ...register("password") }
            />
            <div className={styles.formError}>
              {errors.password?.message}
            </div>
          </div>
          <div className="">
            <button
              className={["btn btn-primary btn-lg", styles.buttons].join(" ")}
              id="submitButton"
              type="submit"
            >
              Login
            </button>
            <button
              className="btn btn-success btn-lg"
              onClick={redirectToRegister}
            >
              Register
            </button>
          </div>
        </form>
      </div>
  );
}
