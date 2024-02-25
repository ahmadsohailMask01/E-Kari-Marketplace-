import React from "react";
import styles from "../../../styles/admin.module.css";
import User_Products from "./User_products.jsx";
import Logout from "./logout";

const User_Dashboard = () => {
  return (
    <>
      <section className={styles.admin_sec}>
        <div className={styles.admin_container}>
          <label className={styles.admin_head}>Welcome to User Dashboard</label>
          <Logout />
        </div>
        <User_Products />
      </section>
    </>
  );
};

export default User_Dashboard;
