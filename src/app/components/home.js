"use client";

import React, { useState } from "react";
import styles from "../../../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import Cards from "./cards";
import icon1 from "../../../assets/icon1.svg";
import icon2 from "../../../assets/icon2.svg";
import icon3 from "../../../assets/icon3.svg";
import { MdEngineering } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { AiFillExperiment } from "react-icons/ai";
import { SiFsecure } from "react-icons/si";
import { useRouter } from "next/navigation";
import { toast as notify } from "react-toastify";
import val1 from "../../../assets/val1.jpg";
import mis1 from "../../../assets/mis1.jpg";

const MainPage = () => {
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
      <section className={styles.section1}>
        <div className={styles.container}>
          <div className={styles.branding}>
            <h2 className={styles.h2}>We are Top</h2>
            <h1 className={styles.h1}>Industrial Leader</h1>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ab, labore delectus quam alias consectetur deleniti odit odio
              molestias dignissimos.
            </p>
            <Link
              href="/products"
              className={styles.link_button}
              title="See Products"
            >
              We Deliever Quality Products
            </Link>
          </div>
          <div className={styles.container2}>
            <div className={styles.card}>
              <div className={styles.card_container}>
                <h3 className={styles.h3}>Chemical Research</h3>
                <span className={styles.h4}>
                  Best Chemical Research Industry
                </span>
              </div>
              <div className={styles.clip} id="clip" />
            </div>

            <div className={styles.card}>
              <div className={styles.card_container}>
                <h3 className={styles.h3}>Chemical Research</h3>
                <span className={styles.h4}>
                  Best Chemical Research Industry
                </span>
              </div>
              <div className={styles.clip} id="clip" />
            </div>
            <div className={styles.card}>
              <div className={styles.card_container}>
                <h3 className={styles.h3}>Chemical Research</h3>
                <span className={styles.h4}>
                  Best Chemical Research Industry
                </span>
              </div>
              <div className={styles.clip} id="clip" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.container3}>
          <div className={styles.column_div}>
            <span className={styles.p1}>Who we are</span>
            <span className={styles.p2}>Provide Industrial Solution</span>
            <span className={styles.p3}>
              We Are Able To Uarantee A Very High Level Of Satisfaction For Our
              Clients. We Offer The Cleanest Line Of Services.
            </span>
          </div>
        </div>
        <div className={styles.container4}>
          <Cards
            src={icon1}
            card_title={"Mechanical"}
            card_paragraph={
              "pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas"
            }
          />
          <Cards
            src={icon2}
            card_title={"Mining Industry"}
            card_paragraph={
              "pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas"
            }
          />
          <Cards
            src={icon3}
            card_title={"Chemical Products"}
            card_paragraph={
              "pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas"
            }
          />
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.container5}>
          <div className={styles.information_div}>
            <div className={styles.info_div_container}>
              <span className={styles.info_div_heading}>
                We are leader in Industrial Market since 2001
              </span>
              <span className={styles.information_para}>
                We are able to guarantee a very high level of satisfaction for
                our clients. Pharetra libero non facilisis imperdiet, mi augue
                feugiat nisl sit amet mollis enim velit Vestibulum fringilla
                nulla ultricies Respondeo dicendum esset iustus.
              </span>
              <div className={styles.row1}>
                <div className={styles.properties_container}>
                  <MdEngineering className={styles.engineer} />
                  <div className={styles.user_info}>
                    <span className={styles.name}>Perfect Engineer</span>
                    <span className={styles.description_info}>
                      We are able to guarantee satisfaction for our clients
                    </span>
                  </div>
                </div>
                <div className={styles.properties_container}>
                  <GiWallet className={styles.engineer} />
                  <div className={styles.user_info}>
                    <span className={styles.name}>Reasonable</span>
                    <span className={styles.description_info}>
                      We are able to guarantee satisfaction for our clients
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.properties_container}>
                  <AiFillExperiment className={styles.engineer} />
                  <div className={styles.user_info}>
                    <span className={styles.name}>Quality Products</span>
                    <span className={styles.description_info}>
                      We are able to guarantee satisfaction for our clients
                    </span>
                  </div>
                </div>
                <div className={styles.properties_container}>
                  <SiFsecure className={styles.engineer} />
                  <div className={styles.user_info}>
                    <span className={styles.name}>Safe & Secure</span>
                    <span className={styles.description_info}>
                      We are able to guarantee satisfaction for our clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.container6}>
          <hr className={styles.hr} />
          <span className={styles.trusted_head}>Our Trusted Partners</span>
          <hr className={styles.hr} />
        </div>
        <div className={styles.partners_container}>
          <span className={styles.partners_name}>PAKChem</span>
          <span className={styles.partners_name}>Indurance</span>
          <span className={styles.partners_name}>Chemixel</span>
          <span className={styles.partners_name}>Blenders</span>
        </div>
      </section>
      <section className={styles.section5}>
        <div className={styles.quote_container}>
          <div className={styles.values}>
            <Image
              src={val1}
              className={styles.values_img}
              alt="values_image"
            />
            <div className={styles.values_content}>
              <span className={styles.values_head}>Our Values</span>
              <span className={styles.values_desc}>
                To manufacture, produce, refine, process, formulate, acquire,
                convert, sell, distribute, import, export,deal in either as
                principals or agents in organic and inorganic chemicals
              </span>
            </div>
          </div>
          <div className={styles.values}>
            <Image
              src={mis1}
              className={styles.values_img}
              alt="Mission_image"
            />
            <div className={styles.values_content}>
              <span className={styles.values_head}>Our Mission</span>
              <span className={styles.values_desc}>
                To manufacture, produce, refine, process, formulate, acquire,
                convert, sell, distribute, import, export,deal in either as
                principals or agents in organic and inorganic chemicals
              </span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.Form}>
            <span className={styles.Form_head}>Request A Quote</span>
            <div className={styles.input_holder}>
              <input
                type="text"
                onChange={(e) => set_name(e.target.value)}
                value={name}
                placeholder="Name"
                className={styles.input}
              />
              <input
                type="email"
                onChange={(e) => set_email(e.target.value)}
                value={email}
                placeholder="Email"
                className={styles.input}
              />
              <input
                type="text"
                onChange={(e) => set_phone(e.target.value)}
                value={phone}
                placeholder="Phone"
                className={styles.input}
              />
              <textarea
                type="text"
                onChange={(e) => set_message(e.target.value)}
                value={message}
                placeholder="Message"
                className={`${styles.input} ${styles.textarea}`}
              />
              <button
                type="submit"
                className={styles.submit}
                title="Submit Details"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MainPage;
