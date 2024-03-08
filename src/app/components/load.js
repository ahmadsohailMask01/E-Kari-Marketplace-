"use client";
import React, { useState, useEffect } from "react";
import loading from "../../../assets/loading.gif";
import styles from "../../../styles/products.module.css";
import Link from "next/link";
import Image from "next/image";

const Load = () => {
  const [showload, setload] = useState(true);
  useEffect(() => {
    const loadingfunc = () => {
      setload(false);
    };
    setTimeout(loadingfunc, 2000);
  }, []);
  return (
    <>
      {showload && (
        <div className={styles.load} id="loading">
          <span>Loading</span>
          <Image src={loading} className={styles.loading_gif}></Image>
        </div>
      )}
    </>
  );
};

export default Load;
