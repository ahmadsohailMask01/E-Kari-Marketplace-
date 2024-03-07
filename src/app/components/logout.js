import React from "react";
import styles from "../../../styles/admin.module.css";
import Cookies from "js-cookie";

const Logout = () => {
  const Log_out = (e) => {
    e.preventDefault();
    try {
      Cookies.remove("loggedin");
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
