import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Narrative } from "@/components/sections/Narrative";
import { DistributionSystem } from "@/components/sections/DistributionSystem";
import { Numbers } from "@/components/sections/Numbers";
import { WhyTwenzer } from "@/components/sections/WhyTwenzer";
import { ContentWall } from "@/components/sections/ContentWall";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Narrative />
      <DistributionSystem />
      <div id="numbers">
        <Numbers />
      </div>
      <div id="why">
        <WhyTwenzer />
      </div>
      <ContentWall />
      <FinalCTA />
      <footer className="flex flex-wrap justify-between gap-3 bg-ink px-6 py-8 font-en text-xs tracking-wider text-olive-light md:px-12">
        <span dir="ltr">© {new Date().getFullYear()} TWENZER. MEDIA</span>
        <span>نخلّيك تُشاف — We make you visible</span>
      </footer>
    </main>
  );
}
