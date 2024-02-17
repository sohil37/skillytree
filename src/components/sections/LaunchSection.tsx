import React from "react";
import styles from "../../stylesheets/components/sections/launchSection.module.css";
import "../../app/globals.css";
import CurvedLargeButton from "../buttons/curvedLargeButton";
import CarouselButton from "../buttons/carouselButton";

function LaunchSection() {
  return (
    <div className={`container ${styles.launchSection}`}>
      <div className={styles.left}>
        <div className={styles.titleDesc}>
          <div className={styles.title}>
            <h1 className={styles.upskillWithA}>Upskill With A</h1>
            <h1 className={styles.personalTouch}>Personal Touch!</h1>
          </div>
          <p className={styles.desc}>
            Video learning is boring because learning gets procrastinated 9 out
            of 10 times. Guarantee yourself a skill in a time you decide,
            connect to a live tutor now!
          </p>
        </div>
        <div className={styles.bookATrailBtn}>
          <CurvedLargeButton width={253} height={62}>
            <>
              Book a Trail&nbsp;
              <img
                src="/images/components/sections/launchSection/arrow-right.svg"
                alt="arrow right icon"
              />
            </>
          </CurvedLargeButton>
        </div>
        <div className={styles.carouselBtns}>
          <CarouselButton active></CarouselButton>
          <CarouselButton></CarouselButton>
          <CarouselButton></CarouselButton>
        </div>
      </div>
      <div className={styles.right}>
        {/* Congrats */}
        <div className={`${styles.congrats} ${styles.glass}`}>
          <img
            src="/images/components/sections/launchSection/mail-icon.svg"
            alt="mail icon"
          />
          <div className={styles.congratsTitleDesc}>
            <h3 className={styles.congratsTitle}>CONGRATS!</h3>
            <p className={styles.congratsDesc}>FOR YOUR NEW SKILL</p>
          </div>
        </div>

        {/* 100+ Tutor */}
        <div className={`${styles.tutor} ${styles.glass}`}>
          <img
            src="/images/components/sections/launchSection/users-icon.svg"
            alt="users icon"
          />
          <div className={styles.tutorTitleDesc}>
            <h3 className={styles.tutorTitle}>100+</h3>
            <p className={styles.congratsDesc}>TUTOR</p>
          </div>
        </div>

        {/* 10K+ Students */}
        <div className={`${styles.students} ${styles.glass}`}>
          <h3 className={styles.studentsTitle}>10K+ STUDENTS</h3>
          <img
            src="/images/components/sections/launchSection/user-icon.svg"
            alt="users icon"
          />
        </div>

        {/* Cooking Class */}
        <div className={`${styles.cookingClass} ${styles.glass}`}>
          <img
            src="/images/components/sections/launchSection/cooking-class-avatar.svg"
            alt="cooking class avatar"
          />
          <div className={styles.titleTimeBtn}>
            <div className={styles.cookingClassTitle}>
              <span className={styles.white}>Cooking</span>
              &nbsp;
              <span className={styles.peach}>Class</span>
            </div>
            <div className={styles.time}>
              <span className={styles.white}>TOMORROW AT</span>
              &nbsp;
              <span className={styles.peach}>10.00AM</span>
            </div>
            <button className={styles.joinNowBtn}>JOIN NOW</button>
          </div>
        </div>

        <div className={styles.ellipse}></div>
      </div>
    </div>
  );
}

export default LaunchSection;
