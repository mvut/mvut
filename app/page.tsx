import CoursesPage from "@/app/components/courses";
import SloganPage from "@/app/components/slogan";
import ProgramComponent from "@/app/components/programs";
import ResearchComponent from "@/app/components/research";
import FooterComponent from "@/app/components/footer";
import StrategicPartners from "@/app/components/partners";
import NavComponent from "@/app/components/nav";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
        <NavComponent/>
        <CoursesPage/>
        <SloganPage/>
        <ProgramComponent/>
        <StrategicPartners />
        <ResearchComponent/>
        {/*<FooterComponent/>*/}
    </main>
  );
}
