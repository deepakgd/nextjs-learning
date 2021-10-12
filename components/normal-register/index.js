import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import styles from './styles.module.css';

const schema = yup.object().shape({
  username: yup.string().required("Please enter user name"),
  email: yup.string().email("Please enter valid email address").required("Email address required"),
  password: yup.string().min(4).max(25).required("Please enter password"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Confirm password should match with password").required("Confirm password required"),
});


export default function NormalRegister() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);

  return (
      <div className="container px-5 my-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              className="form-control"
              { ...register("email") }
              placeholder="Email Address"
            />
            <div className={styles.formError}>
              {errors.email?.message}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="userName">
              User name
            </label>
            <input
              className="form-control"
              id="userName"
              type="text"
              placeholder="User name"
              { ...register("username") }
            />
            <div className={styles.formError}>
              {errors.username?.message}
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
          <div className="mb-3">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="form-control"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              { ...register("confirmPassword") }
            />
            <div className={styles.formError}>
              {errors.confirmPassword?.message}
            </div>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary btn-lg"
              id="submitButton"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  );
}
