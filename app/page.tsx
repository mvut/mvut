import StrategicPartners from "@/app/components/partners";
import NavComponent from "@/app/components/nav";
import WhyUsComponent from "@/app/components/whyus";
import NewsAndEvents from "@/app/components/news";
import FounderMessage from "@/app/components/founder";

export default function Home() {
  return (
    <main >
        <NavComponent/>
        <FounderMessage/>
        <WhyUsComponent/>
        <NewsAndEvents/>
        <StrategicPartners />
    </main>
  );
}
