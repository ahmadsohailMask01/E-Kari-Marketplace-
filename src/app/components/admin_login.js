"use client";

import React, { useState } from "react";
import styles from "../../../styles/admin.module.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast as note } from "react-hot-toast";
import { toast as notify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin_Login = () => {
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const router = useRouter();
  const [message, setMessage] = useState("You are not logged in");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.refresh();
    if (Username === "Admin" && Password === "admin") {
      try {
        const res = Cookies.set("loggedin", true);
        router.push("/admin_dashboard");
        notify.success("Admin Login Successful!");
        if (!res) {
          return note.error("Login Failed!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      note.error("Invalid Login Credentials!");
    }
  };

  return (
    <>
      <section className={styles.admin_form_sec}>
        <div className={styles.admin_form_container}>
          <h1>{message}</h1>
          <label className={styles.form_label}>Admin Login Form</label>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              name="Username"
              required={true}
              placeholder="Admin Username"
              value={Username}
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              name="Password"
              required={true}
              placeholder="Admin Password"
              value={Password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button
              className={styles.submit_button}
              type="submit"
              title="Login to Admin Dashboard"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Admin_Login;
