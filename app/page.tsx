import HeroPage from "@/app/components/hero";
import CoursesPage from "@/app/components/courses";
import SloganPage from "@/app/components/slogan";
import NewsComponent from "@/app/components/news";
import ProgramComponent from "@/app/components/programs";
import ResearchComponent from "@/app/components/research";
import FooterComponent from "@/app/components/footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroPage/>
        <CoursesPage/>
        <SloganPage/>
      <NewsComponent/>
        <ProgramComponent/>
        <ResearchComponent/>
        <FooterComponent/>
    </main>
  );
}
