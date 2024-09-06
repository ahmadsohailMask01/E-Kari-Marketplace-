import React from "react";
import styles from "../../../styles/about.module.css";
import Link from "next/link";
import Image from "next/image";
import ceo from "../../../assets/ceo.png";
import {
  BiSolidQuoteSingleLeft,
  BiSolidQuoteSingleRight,
} from "react-icons/bi";
import { FaPaintBrush, FaPhotoVideo, FaShareAlt } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import getEmailFromSession from "./getEmailFromSession";

const About = () => {
  const email = getEmailFromSession();
  console.log(email);
  return (
    <>
      <section className={styles.blogs_section}>
        <div className={styles.blog_container}>
          <div className={styles.head_div}>
            <span className={styles.blogs_heading}>
              A leading platform in Pakistan {email}
            </span>
            <span className={styles.sub_heading}>
              Congue consectetur sapien pellentesque ultrices tempus nunc.
            </span>
            <Link href="#" className={styles.btn}>
              Learn More &rarr;
            </Link>
          </div>
          <div className={styles.div2} />
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.sec2_container}>
          <div className={styles.info1}>
            <span className={styles.hi}> Hi, there!</span>
            <span className={styles.about}>We are Abstract Expression</span>
          </div>
          <div className={styles.info2}>
            <span className={styles.para}>
              Id in massa et feugiat non enim non pretium pretium fermentum
              donec neque pellentesque et sociis integer amet venenatis
              dignissim a porta maecenas non. Placerat aliquet eu, sollicitudin
              interdum leo suspendisse aliquam imperdiet gravida mauris quis sit
              fusce in purus leo eu sapien amet, arcu, lacus in enim vulputate
              cras tortor posuere elementum pulvinar netus morbi nulla etiam
              amet dictum tortor purus malesuada sed maecenas tincidunt
              elementum id in placerat ut semper.
            </span>
            <Link href="#" className={styles.btn2}>
              Read More &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <span className={styles.interest}>What we do</span>
        <div className={styles.des1} />
        <div className={styles.des2} />
        <div className={styles.sec3_head_container}>
          <span className={styles.main_head1}>Advertising Solutions</span>
          <br />
          <span className={styles.sub_2}>
            We Are Able To Uarantee A Very High Level Of Satisfaction For Our
            Clients. We Offer The Cleanest Line Of Services.
          </span>
        </div>
        <div className={styles.sec3_container}>
          <div className={styles.row}>
            <div className={styles.row_col}>
              <FaPaintBrush className={styles.icon} />
              <span className={styles.icon_head}>Creative Advertising</span>
              <span className={styles.icon_para}>
                Ultrices leo dictum integer quam nulla morbi adipiscing ac
                suspendisse neque vel non egestas commodo sit felis consectetur.
              </span>
            </div>
            <div className={styles.row_col}>
              <FaPhotoVideo className={styles.icon} />
              <span className={styles.icon_head}>Digital Advertising</span>
              <span className={styles.icon_para}>
                Ultrices leo dictum integer quam nulla morbi adipiscing ac
                suspendisse neque vel non egestas commodo sit felis consectetur.
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.row_col}>
              <CgScreen className={styles.icon} />
              <span className={styles.icon_head}>Traditional</span>
              <span className={styles.icon_para}>
                Ultrices leo dictum integer quam nulla morbi adipiscing ac
                suspendisse neque vel non egestas commodo sit felis consectetur.
              </span>
            </div>
            <div className={styles.row_col}>
              <FaShareAlt className={styles.icon} />
              <span className={styles.icon_head}>Social Media</span>
              <span className={styles.icon_para}>
                Ultrices leo dictum integer quam nulla morbi adipiscing ac
                suspendisse neque vel non egestas commodo sit felis consectetur.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.sec4_container}>
          <span className={styles.tech_intro}>
            <Image src={ceo} className={styles.ceo_picture} alt="CEO_Image" />
            <span className={styles.ceo_name}>M. Ahmad Sohail</span>
            <span className={styles.ceo_head}>Founder</span>
          </span>
          <span className={styles.tech_para}>
            <BiSolidQuoteSingleLeft className={styles.comma1} />
            Perfection is achieved not when there is nothing more to add, but
            rather when there is nothing more to take away
            <BiSolidQuoteSingleRight className={styles.comma2} />
          </span>
        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.sec4_container}>
          <span className={styles.tech_intro}>Our Values</span>
          <span className={styles.tech_para}>
            Fostering a community-driven approach that prioritizes and
            celebrates the authenticity and originality of digital artworks,
            ensuring fair compensation and recognition for artists
          </span>
        </div>
        <div className={styles.sec4_container}>
          <span className={styles.tech_intro}>Our Mission</span>
          <span className={styles.tech_para}>
            Fostering creativity and forging connections, our mission is to
            provide a vibrant digital marketplace where artists can unleash
            their creativity and connect with a global audience. We believe in
            empowering creators by offering them a platform to showcase their
            talent, while also enabling art enthusiasts to discover and acquire
            unique digital artworks that resonate with their souls. Through
            meaningful connections and appreciation of diverse art forms, we aim
            to cultivate a thriving community where inspiration knows no bounds
          </span>
        </div>
      </section>
      <section className={styles.section5}>
        <div className={styles.sec5_container}>
          <span className={styles.sec5_head}>Our Clients</span>
          <div className={styles.clients_name}>
            <span className={styles.brands}>Superior</span>
            <span className={styles.brands}>AURLab</span>
            <span className={styles.brands}>DevFusion</span>
            <span className={styles.brands}>PU</span>
            <span className={styles.brands}>UCP</span>
          </div>
          <div className={styles.clients_holder}>
            <div className={styles.clients_alternate}>
              <span className={styles.brands}>Superior</span>
              <span className={styles.brands}>AURLab</span>
              <span className={styles.brands}>DevFusion</span>
            </div>
            <div className={styles.clients_alternate}>
              <span className={styles.brands}>PU</span>
              <span className={styles.brands}>UCP</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
