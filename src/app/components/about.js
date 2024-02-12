import React from "react";
import styles from "../../../styles/about.module.css";
import Link from "next/link";
import Image from "next/image";
import ceo from "../../../assets/ceo.jpeg";
import {
  BiSolidQuoteSingleLeft,
  BiSolidQuoteSingleRight,
} from "react-icons/bi";
import { MdEngineering } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { AiFillExperiment } from "react-icons/ai";
import { SiFsecure } from "react-icons/si";

const About = () => {
  return (
    <>
      <section className={styles.blogs_section}>
        <div className={styles.blog_container}>
          <div className={styles.head_div}>
            <span className={styles.blogs_heading}>
              A leading platform in Pakistan
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
          <span className={styles.main_head1}>Provide Industrial Solution</span>
          <br />
          <span className={styles.sub_2}>
            We Are Able To Uarantee A Very High Level Of Satisfaction For Our
            Clients. We Offer The Cleanest Line Of Services.
          </span>
        </div>
        <div className={styles.sec3_container}>
          <div className={styles.row}>
            <div className={styles.row_col}>
              <MdEngineering className={styles.icon} />
              <span className={styles.icon_head}>Perfect Engineer</span>
              <span className={styles.icon_para}>
                Ultrices leo dictum integer quam nulla morbi adipiscing ac
                suspendisse neque vel non egestas commodo sit felis consectetur.
              </span>
            </div>
            <div className={styles.row_col}>
              <GiWallet className={styles.icon} />
              <span className={styles.icon_head}>Reasonable</span>
              <span className={styles.icon_para}>
                Ultrices leo dictum integer quam nulla morbi adipiscing ac
                suspendisse neque vel non egestas commodo sit felis consectetur.
              </span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.row_col}>
              <AiFillExperiment className={styles.icon} />
              <span className={styles.icon_head}>Quality Products</span>
              <span className={styles.icon_para}>
                Ultrices leo dictum integer quam nulla morbi adipiscing ac
                suspendisse neque vel non egestas commodo sit felis consectetur.
              </span>
            </div>
            <div className={styles.row_col}>
              <SiFsecure className={styles.icon} />
              <span className={styles.icon_head}>Safe & Secure</span>
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
            <span className={styles.ceo_name}>Sohaib Manzoor</span>
            <span className={styles.ceo_head}>Ceo</span>
          </span>
          <span className={styles.tech_para}>
            <BiSolidQuoteSingleLeft className={styles.comma1} />
            Now you have the demand for chemical manufacturing or mixing. How do
            you decide which company is the best choice? Improper selection may
            lead to long delivery time, poor quality or waste of time and money.
            If you choose well, you will be surprised to find how much value
            your partner has added to your production process.
            <BiSolidQuoteSingleRight className={styles.comma2} />
          </span>
        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.sec4_container}>
          <span className={styles.tech_intro}>Our Values</span>
          <span className={styles.tech_para}>
            To manufacture, produce, refine, process, formulate, acquire,
            convert, sell, distribute, import, export,deal in either as
            principals or agents in organic and inorganic chemicals
          </span>
        </div>
        <div className={styles.sec4_container}>
          <span className={styles.tech_intro}>Our Mission</span>
          <span className={styles.tech_para}>
            To manufacture, produce, refine, process, formulate, acquire,
            convert, sell, distribute, import, export,deal in either as
            principals or agents in organic and inorganic chemicals
          </span>
        </div>
      </section>
      <section className={styles.section5}>
        <div className={styles.sec5_container}>
          <span className={styles.sec5_head}>Our Clients</span>
          <div className={styles.clients_name}>
            <span className={styles.brands}>PAKChem</span>
            <span className={styles.brands}>Chemixel</span>
            <span className={styles.brands}>Blenders</span>
            <span className={styles.brands}>Indurance</span>
            <span className={styles.brands}>Mixels</span>
          </div>
          <div className={styles.clients_holder}>
            <div className={styles.clients_alternate}>
              <span className={styles.brands}>PAKChem</span>
              <span className={styles.brands}>Chemixel</span>
              <span className={styles.brands}>Blenders</span>
            </div>
            <div className={styles.clients_alternate}>
              <span className={styles.brands}>Indurance</span>
              <span className={styles.brands}>Mixels</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
