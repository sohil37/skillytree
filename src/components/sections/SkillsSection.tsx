import React from "react";
import styles from "../../stylesheets/components/sections/skillsSection.module.css";
import CurvedLargeButton from "../buttons/curvedLargeButton";

function SkillsSection() {
  return (
    <div className={`container ${styles.skillsSection}`}>
      <div className={styles.left}>
        <div className={styles.skillsOffered}>
          <h1 className={styles.skills}>Skills</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h1 className={styles.offered}>Offered</h1>
        </div>
        <h4 className={styles.gardeningClasses}>Gardening Classes</h4>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          eget congue vel vivamus massa ornare. Tellus fringilla urna, ultricies
          id justo. Nisl adipiscing faucibus sed auctor tristique lorem volutpat
          vulputate
        </p>
        <p className={styles.price}>Rs. 999/Hr</p>
        <div className={styles.exploreMoreBtn}>
          <CurvedLargeButton height={62} width={287}>
            <>
              EXPLORE MORE&nbsp;
              <img
                src="/images/components/sections/launchSection/arrow-right.svg"
                alt="arrow right icon"
              />
            </>
          </CurvedLargeButton>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default SkillsSection;
