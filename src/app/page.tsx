import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import LaunchSection from "@/components/sections/LaunchSection";
import ReviewSection from "@/components/sections/ReviewSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TopTutors from "@/components/sections/TopTutors";

export default function Home() {
  return (
    <>
      <Navbar />
      <LaunchSection />
      <SkillsSection />
      <TopTutors />
      <ReviewSection />
      <FooterSection />
    </>
  );
}
