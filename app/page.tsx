import Capability from "@/components/capability";
import CoreCastingProcesses from "@/components/castingProcess";
import CastingWithRivexa from "@/components/castingRivexa";
import CastingProcess from "@/components/castingStep";
import CastSourcePromise from "@/components/castSource";
import DefectFreeCasting from "@/components/DefectFreeCasting";
import Footer from "@/components/footer";
import IndustriesWeServe from "@/components/industriesWeServe";
// import Header from "@/components/header";
import HeroSection from "@/components/main-banner";
import MaterialCapabilities from "@/components/materialCapability";
import OtherManufacturingProcesses from "@/components/OtherManufacturingProcesses";
import SupplierCertifications from "@/components/supplierCertifications";
import SurfacePreparation from "@/components/SurfacePreparation";
import ValueAddedServices from "@/components/ValueAddedServices";
import WhyRivexa from "@/components/WhyRivexa";

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
        <IndustriesWeServe />
        <MaterialCapabilities />
        <Capability />
        <ValueAddedServices />
        <SurfacePreparation />
        <DefectFreeCasting />
        <WhyRivexa />
        <SupplierCertifications />
        <OtherManufacturingProcesses />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
