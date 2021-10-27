import Link from "next/link";
import styles from './styles.module.css';
import { useAppContext } from "@context/app-context";

export default function Navbar() {

  const { user, logout } = useAppContext();

  return (
    <nav className={styles.customnavbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      {!user.isLoading && (
        <>
          { !user.email ? (
            <>
            <Link href="/authentication/normal/login">
              <a>Login</a>
            </Link>
            <Link href="/authentication/normal/register">
              <a>Register</a>
            </Link>
            </>
          ): (
              <a onClick={logout} href="#">Logout</a>
          ) }
        </>
      )}
    </nav>
  );
};
