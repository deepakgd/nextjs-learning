import Link from "next/link";
import styles from './styles.module.css';

export default function Navbar() {
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
    </nav>
  );
};
