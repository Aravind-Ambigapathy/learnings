import Capability from "@/components/capability";
import CoreProcess from "@/components/castingProcess";
import CastingWithRivexa from "@/components/castingRivexa";
import ProcessSection from "@/components/castingStep";
import CastSourcePromise from "@/components/castSource";
import DefectFreeCasting from "@/components/DefectFreeCasting";
import Footer from "@/components/footer";
import IndustriesWeServe from "@/components/IndustryGrid";
// import Header from "@/components/header";
import HeroSection from "@/components/main-banner";
import MaterialCapabilities from "@/components/materialCapability";
import OtherManufacturingProcesses from "@/components/OtherManufacturingProcesses";
import SupplierCertifications from "@/components/supplierCertifications";
import SurfacePreparation from "@/components/SurfacePreparation";
import ValueAddedServices from "@/components/ValueAddedServices";
import WhyRivexa from "@/components/WhyRivexa";
import { castingCapabilities, castingData, castingFormData, castingIndustries, castingMaterials, castingServicesData, castingSourceData, castingSteps } from "@/data/castingData";

export default function Home() {

  return (
    <div className="">
      {/* <Header /> */}
      <main className="">
        <HeroSection image={"/images/banner.png"} type="casting" />
        <CastingWithRivexa data={castingFormData}/>
        <CastSourcePromise data={castingSourceData} />
        <ProcessSection title="The Casting Process"
          steps={castingSteps} />
        <CoreProcess data={castingData} />
        <IndustriesWeServe data={castingIndustries}/>
        <MaterialCapabilities  title="Material Capabilities for Diverse Industries" materials={castingMaterials}/>
        <Capability  data={castingCapabilities}/>
        <ValueAddedServices   data={castingServicesData}/>
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
