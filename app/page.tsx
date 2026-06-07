import CoreCastingProcesses from "@/components/castingProcess";
import CastingWithRivexa from "@/components/castingRivexa";
import CastingProcess from "@/components/castingStep";
import CastSourcePromise from "@/components/castSource";
// import Header from "@/components/header";
import HeroSection from "@/components/main-banner";

export default function Home() {
  return (
    <div className="">
       {/* <Header /> */}
      <main className="">
        <HeroSection />
        <CastSourcePromise />
        <CastingWithRivexa />
        <CastingProcess />
        <CoreCastingProcesses />
      </main>
    </div>
  );
}
