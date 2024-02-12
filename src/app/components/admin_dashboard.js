import React from "react";
import styles from "../../../styles/admin.module.css";
import Admin_Products from "./Admin_products";
import Logout from "./logout";

const Admin_Dashboard = () => {
  return (
    <>
      <section className={styles.admin_sec}>
        <div className={styles.admin_container}>
          <label className={styles.admin_head}>
            Welcome to Admin Dashboard
          </label>
          <Logout />
        </div>
        <Admin_Products />
      </section>
    </>
  );
};

export default Admin_Dashboard;
