import React from "react";
import styles from "../../stylesheets/components/sections/topTutors.module.css";
import Tutor from "../cards/TutorCard";

function TopTutors() {
  return (
    <div className={`container ${styles.topTutorsSection}`}>
      <div className={styles.topTutors}>
        <h1 className={styles.top}>TOP</h1>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className={styles.tutors}>TUTORS</h1>
      </div>
      <div className={styles.tutorsContainer}>
        <Tutor
          topTutorBadge
          coverPhotoUrl="/images/components/sections/topTutorSection/coverPhoto.png"
          profilePicUrl="/images/components/sections/topTutorSection/profilePic.png"
          name="Radhakishan J."
          verified
          originCountry="uk"
          subjects="English, Geography, +3"
          languages="English (Native), Hindi (Conversational) +1"
          numericInfo={{
            activeStudents: 3,
            sessionFinished: 45,
            rating: 172,
          }}
          brief="dolor sit amet, consectetur adipiscing elit. Fringilla enim, at rhoncus nisl, condimentum vitae enim. Ipsum aliquet aliquet viverra pharetra"
          price={20}
        />
        <Tutor
          topTutorBadge
          coverPhotoUrl="/images/components/sections/topTutorSection/coverPhoto.png"
          profilePicUrl="/images/components/sections/topTutorSection/profilePic.png"
          name="Radhakishan J."
          verified
          originCountry="uk"
          subjects="English, Geography, +3"
          languages="English (Native), Hindi (Conversational) +1"
          numericInfo={{
            activeStudents: 3,
            sessionFinished: 45,
            rating: 172,
          }}
          brief="dolor sit amet, consectetur adipiscing elit. Fringilla enim, at rhoncus nisl, condimentum vitae enim. Ipsum aliquet aliquet viverra pharetra"
          price={20}
        />
        <Tutor
          topTutorBadge
          coverPhotoUrl="/images/components/sections/topTutorSection/coverPhoto.png"
          profilePicUrl="/images/components/sections/topTutorSection/profilePic.png"
          name="Radhakishan J."
          verified
          originCountry="uk"
          subjects="English, Geography, +3"
          languages="English (Native), Hindi (Conversational) +1"
          numericInfo={{
            activeStudents: 3,
            sessionFinished: 45,
            rating: 172,
          }}
          brief="dolor sit amet, consectetur adipiscing elit. Fringilla enim, at rhoncus nisl, condimentum vitae enim. Ipsum aliquet aliquet viverra pharetra"
          price={20}
        />
      </div>
      <div className={`${styles.glass} ${styles.ellipse1}`}></div>
      <div className={`${styles.glass} ${styles.ellipse2}`}></div>
    </div>
  );
}

export default TopTutors;
