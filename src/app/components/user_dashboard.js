import React from "react";
import styles from "../../../styles/admin.module.css";
import User_Products from "./User_products.js";
import { useSession } from "next-auth/react";
import Image from "next/image";

const User_Dashboard = () => {
  const { session } = null;
  const getSession = () => {
    session = useSession();
  };
  getSession();
  return (
    <>
      <section className={styles.admin_sec}>
        <div className={styles.admin_container}>
          {getSession ? (
            <div className={styles.admin_head}>
              <Image
                src={session.user.image}
                width={100}
                height={100}
                style={{ borderRadius: `50%` }}
              ></Image>
              <div className={styles.user_info}>
                <label>Welcome {session.user.name}</label>
                <span className={styles.email_label}>
                  Email: {session.user.email}
                </span>
              </div>
            </div>
          ) : (
            "Loading"
          )}
        </div>
        <User_Products />
      </section>
    </>
  );
};

export default User_Dashboard;
