"use client";
import React from "react";
import styles from "../../../styles/admin.module.css";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const GoogleSignInBtn = () => {
  return (
    <>
      <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.google_div}
      >
        <div className={styles.google_icon_div}>
          <FcGoogle style={{ fontSize: `30px` }} />
        </div>
        <div className={styles.google_label_div}>
          <span>Sign In with Google</span>
        </div>
      </button>
    </>
  );
};

export default GoogleSignInBtn;
