"use client";

import React, { useState } from "react";
import styles from "../../../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import Cards from "./cards";
import { useRouter } from "next/navigation";
import { toast as notify } from "react-toastify";
import Banner from "../../../assets/images/Banner/Banner.png";
import vip from "../../../assets/images/CollectionType/vip.png";
import music from "../../../assets/images/CollectionType/music.png";
import gamepad from "../../../assets/images/CollectionType/gamepad.png";
import camera from "../../../assets/images/CollectionType/camera.png";
import art from "../../../assets/images/CollectionType/art.png";
import categoriesBackground from "../../../assets/bg_purple.svg";
import digitalPainting from "../../../assets/digitalPainting.jpg";
import illustration from "../../../assets/illustration.webp";
import pixelArt from "../../../assets/pixelArt.webp";
import vectorArt from "../../../assets/vectorArt.webp";
import animation from "../../../assets/animation.webp";
import nftArt from "../../../assets/nftArt.jpg";
import { BASE_API_URL } from "../../../utils/constants";

const MainPage = () => {
  const arrayOfCategories = [
    {
      src: digitalPainting,
      nameOfCategory: "Digital Painting",
    },
    {
      src: illustration,
      nameOfCategory: "Illustration",
    },
    {
      src: pixelArt,
      nameOfCategory: "Pixel Art",
    },
    {
      src: vectorArt,
      nameOfCategory: "Vector Art",
    },
    {
      src: animation,
      nameOfCategory: "Animation",
    },
    {
      src: nftArt,
      nameOfCategory: "NFT Art",
    },
  ];
  const router = useRouter();
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [phone, set_phone] = useState("");
  const [message, set_message] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${BASE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      notify.success("Contact Details sent Successfully!");
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
      <section className={styles.sec1}>
        <div className={styles.container}>
          <div className={styles.banner_sec}>
            <div className={styles.Banner_text}>
              <h1>Discover Unique Digital Treasure.</h1>
              <h5>Explore Collect & Sell</h5>
              <h4>Get in touch with world of imagination</h4>
              <button className={styles.btn_classic}>Explore Now</button>
              <div className={styles.RankingCounts}>
                <div className={styles.Count}>
                  <h1>98K+</h1>
                  <h5>Artwork</h5>
                </div>
                <div className={styles.Count}>
                  <h1>12K+</h1>
                  <h5>Auction</h5>
                </div>
                <div className={styles.Count}>
                  <h1>15K+</h1>
                  <h5>Artist</h5>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.banner_img}>
            <Image className={styles.img2} src={Banner} />
          </div>
        </div>
      </section>

      <div className={styles.TypesCollection_container}>
        <div className={styles.Collection}>
          <div className={styles.collectionimg}>
            <Image className={styles.typeImg} src={vip} />
          </div>
          <h3>Membership</h3>
        </div>
        <div className={styles.Collection}>
          <div className={styles.collectionimg}>
            <Image className={styles.typeImg} src={gamepad} />
          </div>
          <h3>Gaming</h3>
        </div>
        <div className={styles.Collection}>
          <div className={styles.collectionimg}>
            <Image className={styles.typeImg} src={camera} />
          </div>
          <h3>Photography</h3>
        </div>
        <div className={styles.Collection}>
          <div className={styles.collectionimg}>
            <Image className={styles.typeImg} src={art} />
          </div>
          <h3>Art</h3>
        </div>
        <div className={styles.Collection}>
          <div className={styles.collectionimg}>
            <Image className={styles.typeImg} src={music} />
          </div>
          <h3>PFPs</h3>
        </div>
      </div>
      <div className={styles.section3}>
        <label htmlFor="productCategories" className={styles.categoriesLabel}>
          Explore Products by Categories
        </label>
        <div className={styles.allCategories}>
          <div className={styles.container1}>
            {arrayOfCategories.slice(0, 3).map((category) => {
              return (
                <div
                  className={styles.categoriesCard}
                  onClick={() => {
                    window.location.replace(
                      `/productCategories/${category.nameOfCategory}`
                    );
                  }}
                >
                  <Image
                    className={styles.categoriesCardImage}
                    src={category.src}
                    style={{ borderRadius: `20px` }}
                  ></Image>
                  <span>
                    <b>{`${category.nameOfCategory}`}</b>
                  </span>
                </div>
              );
            })}
          </div>
          <div className={styles.container1}>
            {arrayOfCategories.slice(3).map((category) => {
              return (
                <div
                  className={styles.categoriesCard}
                  onClick={() => {
                    window.location.replace(
                      `/productCategories/${category.nameOfCategory}`
                    );
                  }}
                >
                  <Image
                    className={styles.categoriesCardImage}
                    src={category.src}
                    style={{ borderRadius: `20px` }}
                  ></Image>
                  <span>{`${category.nameOfCategory}`}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
