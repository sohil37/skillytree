import React from "react";
import styles from "../stylesheets/components/navbar.module.css";
import Link from "next/link";
import "../app/globals.css";
import RoundedLargeButton from "./buttons/roundedLargeButton";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navbarDiv}`}>
        <Link href="/">
          <img
            src="/images/components/navbar/skillytree-logo.png"
            alt="skillytree logo"
          ></img>
        </Link>
        <div className={styles.navBtns}>
          <Link href="/">
            <img src="/images/components/navbar/search-icon.svg" alt="search" />
          </Link>
          <Link href="/" className={`${styles.navBtn} ${styles.active}`}>
            Home
          </Link>
          <Link href="/" className={styles.navBtn}>
            Find Tutors
          </Link>
          <Link href="/" className={styles.navBtn}>
            How It Works
          </Link>
        </div>
        <div className={styles.navActions}>
          <Link href="/" className={styles.login}>
            <img src="/images/components/navbar/login-icon.svg" alt="login" />
            Log In
          </Link>
          <RoundedLargeButton style={{ height: 38, width: 166 }}>
            Join as Tutor
          </RoundedLargeButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
