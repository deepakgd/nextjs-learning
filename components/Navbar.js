import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="customnavbar">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/events">
        <a>Events</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      {/* <Link href="/ninjas/">
        <a>Ninja Listing</a>
      </Link> */}
    </nav>
  );
};

export default Navbar;