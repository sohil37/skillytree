import React from "react";
import ReviewCard from "../cards/ReviewCard";
import CarouselButton from "../buttons/carouselButton";
import styles from "../../stylesheets/components/carousels/reviewCarousel.module.css";

function ReviewsCarousel() {
  return (
    <div className={styles.reviewCarousel}>
      <ReviewCard
        customerAvatarUrl="/images/components/sections/reviewSection/customer-avatar.png"
        name="Andrew Holt"
        email="graphics123@gmail.com"
        review={`I had been dreaming to learn guitar for 4 yrs. One day I visited Peppertree.com. I clicked "Buy a Trial Session". Later all happened automatically, I kept attending the amazing tutor online and she kept me motivated. It's been 4 weeks & 40 sessions. And woohoo! I just surprised all my friends at a party with my skills! Stop desiring a skill, just start with Peppertree!`}
      />
      <div className={styles.carouselBtns}>
        <CarouselButton active></CarouselButton>
        <CarouselButton></CarouselButton>
        <CarouselButton></CarouselButton>
      </div>
    </div>
  );
}

export default ReviewsCarousel;
