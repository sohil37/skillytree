import React from "react";
import styles from "../../stylesheets/components/cards/tutorCard.module.css";

function TutorCard(props: {
  topTutorBadge: boolean;
  coverPhotoUrl: string;
  profilePicUrl: string;
  name: string;
  verified: boolean;
  originCountry: string;
  subjects: string;
  languages: string;
  numericInfo: {
    activeStudents: number;
    sessionFinished: number;
    rating: number;
  };
  brief: string;
  price: number;
}) {
  return (
    <div className={styles.tutor}>
      <div
        className={styles.coverArea}
        style={{ background: `url(${props.coverPhotoUrl})` }}
      >
        {props.topTutorBadge && (
          <div className={`${styles.glass} ${styles.topTutorBadge}`}>
            TOP TUTOR
          </div>
        )}
        <img
          src="/images/components/sections/topTutorSection/wishlist-icon.svg"
          alt="wishlist icon"
          className={styles.wishlistIcon}
        />
      </div>
      <img
        src={props.profilePicUrl}
        alt="profile picture"
        className={styles.profilePic}
      />
      <div className={styles.tutorInfo}>
        <h3 className={styles.name}>
          {props.name}{" "}
          {props.verified && (
            <img
              src="/images/components/sections/topTutorSection/verified-icon.svg"
              alt="verified icon"
              className={styles.verified}
            ></img>
          )}{" "}
          {props.originCountry.toLowerCase() === "uk" && (
            <img
              src="/images/components/sections/topTutorSection/united-kingdom-icon.svg"
              alt="united kingdom icon"
              className={styles.flag}
            ></img>
          )}
        </h3>
        <div className={styles.subjectsContainer}>
          <img
            src="/images/components/sections/topTutorSection/subject-icon.svg"
            alt="subject icon"
          />
          <p className={styles.subjects}>{props.subjects}</p>
        </div>
        <div className={styles.languagesContainer}>
          <img
            src="/images/components/sections/topTutorSection/language-icon.svg"
            alt="subject icon"
          />
          <p className={styles.languages}>{props.languages}</p>
        </div>
        <div className={styles.numericInfoContainer}>
          <div className={styles.numericInfo}>
            <p className={styles.numericInfoTitle}>Active Students</p>
            <p className={styles.numericInfoValue}>
              {props.numericInfo.activeStudents}
            </p>
          </div>
          <div className={styles.numericInfo}>
            <p className={styles.numericInfoTitle}>Session Finished</p>
            <p className={styles.numericInfoValue}>
              {props.numericInfo.sessionFinished}
            </p>
          </div>
          <div className={styles.numericInfo}>
            <p className={styles.numericInfoTitle}>
              {props.numericInfo.rating}
              <img
                src="/images/components/sections/topTutorSection/star-icon.svg"
                alt="star icon"
              />{" "}
              Ratings
            </p>
            <p className={styles.numericInfoValue}>172</p>
          </div>
        </div>
        <p className={styles.briefContainer}>
          <span className={styles.briefHeading}>Brief : </span>
          <span className={styles.brief}>{props.brief}</span>
        </p>
        <div className={styles.bookTrialBtnContainer}>
          <button className={styles.bookTrialBtn}>
            Book Trial | ${props.price}/Hr
          </button>
          <div className={styles.bookTrailBtnellipse1}></div>
          <div className={styles.bookTrailBtnellipse2}></div>
          <div className={styles.bookTrailBtnellipse3}></div>
        </div>
        <div className={styles.quickviewAndChatBtnContainer}>
          <button className={styles.quickviewBtn}>
            <img
              src="/images/components/sections/topTutorSection/quickview-icon.svg"
              alt="quickview icon"
            />
            QuickView Details
          </button>
          <button className={styles.chatBtn}>
            <img
              src="/images/components/sections/topTutorSection/chat-icon.svg"
              alt="chat with tutor icon"
            />
            Chat With Tutor
          </button>
        </div>
      </div>
    </div>
  );
}

export default TutorCard;
