"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "../../../styles/admin.module.css";
import Cookies from "js-cookie";

const Logout = () => {
  const router = useRouter();
  const Log_out = (e) => {
    e.preventDefault();
    try {
      Cookies.remove("loggedin");
      router.push("/admin_login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button
        className={styles.logout}
        title="Logout from Admin Dashboard"
        onClick={Log_out}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
