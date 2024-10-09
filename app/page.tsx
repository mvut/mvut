import CoursesPage from "@/app/components/courses";
import SloganPage from "@/app/components/slogan";
import ProgramComponent from "@/app/components/programs";
import ResearchComponent from "@/app/components/research";
import StrategicPartners from "@/app/components/partners";
import NavComponent from "@/app/components/nav";
import StatisticsComponent from "@/app/components/statistics";
import WhyUsComponent from "@/app/components/why";
import TechComponent from "@/app/components/tech";

export default function Home() {
  return (
    <main>
        <NavComponent/>
        <WhyUsComponent/>
        <CoursesPage/>
        <SloganPage/>
        <StatisticsComponent/>
        <ProgramComponent/>
        <StrategicPartners />
        <TechComponent/>
        <ResearchComponent/>
    </main>
  );
}
