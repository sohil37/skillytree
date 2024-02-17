import React from "react";
import styles from "../../stylesheets/components/sections/footerSection.module.css";
import RoundedLargeButton from "../buttons/roundedLargeButton";

function FooterSection() {
  return (
    <div className={`container ${styles.footerSection}`}>
      <div className={styles.footerContainer}>
        <img
          src="/images/components/sections/footerSection/skillytree-logo.svg"
          alt="skillytree logo"
          className={styles.logo}
        />
        <div className={styles.blogpostsAndSitemapContainer}>
          <div className={styles.blogpostsAndStartTrialBtnContainer}>
            <div className={styles.blogpostsContainer}>
              <p className={styles.latestBlogPost}>Latest Blog Post</p>
              <h3 className={styles.blogHeading}>Ready to get started?</h3>
              <p className={styles.blog}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <RoundedLargeButton style={{ height: 49.26, width: 201 }}>
              Start Free Trial
            </RoundedLargeButton>
          </div>
          <hr className={styles.hr} />
          <div className={styles.sitemapCopywriteAndPrivacyContainer}>
            <div className={styles.sitemap}>
              <div className={styles.productsContainer}>
                <h3 className={styles.productsHeading}>Product</h3>
                <ul className={styles.productsList}>
                  <li className={styles.product}>Product</li>
                  <li className={styles.product}>Product</li>
                  <li className={styles.product}>Product</li>
                  <li className={styles.product}>Product</li>
                  <li className={styles.product}>Product</li>
                </ul>
              </div>
              <div className={styles.companyContainer}>
                <h3 className={styles.companyHeading}>Company</h3>
                <ul className={styles.companyList}>
                  <li className={styles.company}>Company</li>
                  <li className={styles.company}>Company</li>
                  <li className={styles.company}>Company</li>
                  <li className={styles.company}>Company</li>
                  <li className={styles.company}>Company</li>
                </ul>
              </div>
            </div>
            <div className={styles.copywriteAndPrivacyContainer}>
              <p>© 2010 — 2020</p>
              <p className={styles.privaryAndTerms}>Privacy — Terms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
