import React from "react";
import styles from "../../../styles/footer.module.css";
import Image from "next/image";
import logo from "../../../assets/images/footerLogo/FooterLogo.png";
import { FiPhoneCall } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";
import { IoTimeSharp } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className={styles.footer_section}>
        <div className={styles.container1}>
          <div className={styles.branding}>
            <Image src={logo} className={styles.logo} alt="Logo_image" />
            <div className={styles.Branding_name}>
              <span className={styles.main_head}>NFT MetaMarket</span>
            </div>
          </div>
          <div className={styles.div2}>
            <div className={styles.phone_div}>
              <FiPhoneCall id="phone_number" className={styles.phone} />
              <div className={styles.phone_label_div}>
                <label htmlFor="phone_number" className={styles.phone_label}>
                  Call Us
                </label>
                <number style={{ width: `200%`, color: `darkgrey` }}>
                  03xx-xxxxxxx
                </number>
              </div>
            </div>
            <div className={styles.mail_div}>
              <LuMailOpen id="mail" className={styles.mail_icon} />
              <div className={styles.mail_label_div}>
                <label htmlFor="mail" className={styles.mail_label}>
                  Send Us Mail
                </label>
                <p className={styles.mail_label_font}>
                  info.digitalmarketplace.ekari@gmail.com
                </p>
              </div>
            </div>
            {/* <div className={styles.office_div}>
              <IoTimeSharp id="time" className={styles.time_icon} />
              <div className={styles.office_label_div}>
                <label htmlFor="mail" className={styles.mail_label}>
                  Office Time
                </label>
                <font className={styles.office_label_font}>
                  9:00AM - 5:00PM
                </font>
              </div>
            </div> */}
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.container2}>
          <div className={styles.con2div1}>
            <span className={styles.aboutus_h}>About Us</span>
            <p className={styles.about_para}>
              MarketPlace for crypto collectables and non-fungible tokens
              (NFT'S). Buy, Sell, Discover exclusive digital items.
            </p>
          </div>
          <div className={styles.con2div2}>
            <span className={styles.aboutus_h}>Quick Links</span>
            <div className={styles.links}>
              <Link href="/" className={styles.links_style}>
                Home
              </Link>
              <Link href="/about" className={styles.links_style}>
                About Us
              </Link>
              <Link href="/products" className={styles.links_style}>
                Services
              </Link>
              <Link href="/blog" className={styles.links_style}>
                Blog
              </Link>
              <Link href="/contact" className={styles.links_style}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className={styles.con2div2}>
            <span className={styles.aboutus_h}>Support</span>
            <div className={styles.links}>
              <Link href={""} className={styles.links_style}>
                Support Center
              </Link>
              <Link href={""} className={styles.links_style}>
                Privacy Policy
              </Link>
              <Link href={""} className={styles.links_style}>
                Terms of Use
              </Link>
              <Link href={""} className={styles.links_style}>
                FAQs
              </Link>
              <Link href={""} className={styles.links_style}>
                Help
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
