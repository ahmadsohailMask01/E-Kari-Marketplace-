"use client";
import Link from "next/link";
import styles from "../../../styles/header.module.css";
import logo from "../../../assets/images/Logo/Logo.png";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { status } = useSession();
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
          <Link className={styles.link_style} href="/about">
            About
          </Link>
          <Link className={styles.link_style} href="/user">
            User
          </Link>
          {status === "authenticated" ? (
            <>
              <button onClick={() => signOut()} className={styles.link_style}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className={styles.link_style} href="/user_login">
                Login
              </Link>
              <Link className={styles.link_style} href="/signup">
                Register
              </Link>
            </>
          )}
        </div>
        <div className={styles.col_500}>
          <div className={styles.NavBarLinks_500}>
            <Link className={styles.link_style} href="/">
              Home
            </Link>
            <Link className={styles.link_style} href="/products">
              Buy Item
            </Link>
            <Link className={styles.link_style} href="/addProduct">
              Create Item
            </Link>
            <Link className={styles.link_style} href="/about">
              About
            </Link>
          </div>
          <div className={styles.NavBarLinks_500}>
            <Link className={styles.link_style} href="/user_dashboard">
              User
            </Link>
            <Link className={styles.link_style} href="/user_login">
              Login
            </Link>
            <Link className={styles.link_style} href="/signup">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
