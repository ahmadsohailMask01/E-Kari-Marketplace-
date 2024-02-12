"use client";

import React, { useState } from "react";
import styles from "../../../styles/contact.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { toast as note } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [message, set_message] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      note.success("Contact Details sent Successfully!");
      router.refresh();
      set_name("");
      set_email("");
      set_phone("");
      set_message("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className={styles.section1}>
        <div className={styles.section_container}>
          <span className={styles.contact_head}>Drop Us A Message</span>
          <span className={styles.contact_subhead}>
            We're Happy To Discuss Your Project And Answer Any Question
          </span>
        </div>
        <div className={styles.form_info_container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Name"
              onChange={(e) => set_name(e.target.value)}
              value={name}
              required={true}
            />
            <input
              className={styles.input}
              type="email"
              onChange={(e) => set_email(e.target.value)}
              value={email}
              placeholder="Email"
              required={true}
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            />
            <input
              className={styles.input}
              required={true}
              type="text"
              onChange={(e) => set_phone(e.target.value)}
              value={phone}
              placeholder="Phone"
            />
            <textarea
              className={styles.textarea}
              required={true}
              onChange={(e) => set_message(e.target.value)}
              value={message}
              placeholder="Your Message"
            />
            <button
              type="submit"
              title="Send Details!"
              className={styles.button}
            >
              Send!
            </button>
          </form>
          <div className={styles.contact_info}>
            <div className={styles.info_row}>
              <IoLocationOutline className={styles.icon} />
              <div className={styles.row_col}>
                <span className={styles.info_head}>Address</span>
                <span className={styles.info_data}>Lahore, Pakistan</span>
              </div>
            </div>
            <div className={styles.info_row}>
              <FiPhoneCall className={styles.icon} />
              <div className={styles.row_col}>
                <span className={styles.info_head}>Call Us</span>
                <span className={styles.info_data}>+923344521497</span>
              </div>
            </div>
            <div className={styles.info_row}>
              <LuMailOpen className={styles.icon} />
              <div className={styles.row_col}>
                <span className={styles.info_head}>Send Us Mail</span>
                <span className={styles.info_data}>
                  info.industrypakchem924@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
