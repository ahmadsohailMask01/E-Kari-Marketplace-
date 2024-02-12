import React from "react";
import styles from "../../../styles/cards.module.css";
import Image from "next/image";

const Cards = ({ src, card_title, card_paragraph }) => {
  return (
    <>
      <div className={styles.card}>
        <Image className={styles.img} src={src} width={150} height={100} />
        <span className={styles.card_title}>{card_title}</span>
        <span className={styles.card_para}>{card_paragraph}</span>
      </div>
    </>
  );
};

export default Cards;
