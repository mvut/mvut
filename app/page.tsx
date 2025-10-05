import StrategicPartners from "@/app/components/partners";
import NavComponent from "@/app/components/nav";
import StatisticsComponent from "@/app/components/statistics";
import WhyUsComponent from "@/app/components/whyus";
import NewsAndEvents from "@/app/components/news";
import StudyAreaComponent from "@/app/components/studyarea";
import FounderMessage from "@/app/components/founder";
import FloatingAd from "@/app/components/ad";

export default function Home() {
  return (
    <main >
        <FloatingAd/>
        <NavComponent/>
        <FounderMessage/>
        <WhyUsComponent/>
        <StudyAreaComponent/>
        <NewsAndEvents/>
        <StatisticsComponent/>
        <StrategicPartners />
    </main>
  );
}
