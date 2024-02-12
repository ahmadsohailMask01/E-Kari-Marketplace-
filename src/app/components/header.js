import Link from "next/link";
import styles from "../../../styles/header.module.css";
import logo from "../../../assets/images/Logo/Logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <div className={styles.row}>
          <Image className={styles.logo} src={logo} width={50} height={50} />
          <h1 className={styles.LogoText}>E-Kari</h1>
        </div>
        <div className={styles.NavBarLinks}>
          <Link className={styles.link_style} href="/">
            Home
          </Link>
          <Link className={styles.link_style} href="/products">
            Buy Item
          </Link>
          <Link className={styles.link_style} href="/addProduct">
            Create Item
          </Link>
          <Link className={styles.link_style} href="/blog">
            Blogs
          </Link>
          <Link className={styles.link_style} href="/user">
            User
          </Link>
          <Link className={styles.link_style} href="/login">
            Login
          </Link>
          <Link className={styles.link_style} href="/signup">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
