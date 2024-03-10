"use client";
import Link from "next/link";
import styles from "../../../styles/header.module.css";
import logo from "../../../assets/images/Logo/Logo.png";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
  const { status } = useSession();
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href={"/"} className={styles.ekarilink}>
          <div className={styles.row}>
            <Image className={styles.logo} src={logo} width={50} height={50} />
            <h1 className={styles.LogoText}>E-Kari</h1>
          </div>
        </Link>
        <div className={styles.search}>
          <input
            placeholder="Find the Art you love, by Artist"
            type="text"
            className={styles.search_inp}
          />
          <button className={styles.search_btn}>
            <IoSearchSharp style={{ color: `#f3f3f3`, fontSize: `20px` }} />
          </button>
        </div>
        <div className={styles.NavBarLinks}>
          <Link className={styles.link_style} href="/">
            Explore Art
          </Link>
          <Link className={styles.link_style} href="/products">
            Shop
          </Link>
          <Link className={styles.link_style} href="/addProduct">
            Create
          </Link>
          <Link className={styles.link_style} href="/about">
            About Us
          </Link>
          <Link className={styles.link_style} href="/user_dashboard">
            User
          </Link>
          <Link className={styles.link_style} href="/about">
            Contact
          </Link>
          {status === "authenticated" ? (
            <>
              <button
                onClick={() => signOut()}
                className={styles.logout_btn}
                title="Logout"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className={styles.link_style} href="/user_login">
                Login
              </Link>
            </>
          )}
        </div>
        <div className={styles.col_500}>
          <div className={styles.NavBarLinks_500}>
            <Link className={styles.link_style} href="/">
              Explore Art
            </Link>
            <Link className={styles.link_style} href="/products">
              Shop
            </Link>
            <Link className={styles.link_style} href="/addProduct">
              Create
            </Link>
            <Link className={styles.link_style} href="/about">
              About Us
            </Link>
          </div>
          <div className={styles.NavBarLinks_500}>
            <Link className={styles.link_style} href="/user_dashboard">
              User
            </Link>
            {status === "authenticated" ? (
              <>
                <button
                  onClick={() => signOut()}
                  className={styles.logout_btn}
                  title="Logout"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className={styles.link_style} href="/user_login">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
