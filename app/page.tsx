import CoursesPage from "@/app/components/courses";
import SloganPage from "@/app/components/slogan";
import ProgramComponent from "@/app/components/programs";
import ResearchComponent from "@/app/components/research";
import StrategicPartners from "@/app/components/partners";
import NavComponent from "@/app/components/nav";
import StatisticsComponent from "@/app/components/statistics";
import WhyUsComponent from "@/app/components/why";
import TechComponent from "@/app/components/tech";
import NewsComponent from "@/app/components/news";
import StudyAreaComponent from "@/app/components/studyarea";

export default function Home() {
  return (
    <main>
        <NavComponent/>
        <WhyUsComponent/>
        <StudyAreaComponent/>
        <NewsComponent/>
        {/*<SloganPage/>*/}
        {/*<CoursesPage/>*/}

        {/*<ProgramComponent/>*/}

        {/*<TechComponent/>*/}
        <ResearchComponent/>
        <StatisticsComponent/>
        <StrategicPartners />
    </main>
  );
}
