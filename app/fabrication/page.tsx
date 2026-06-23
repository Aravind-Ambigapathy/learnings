import HeroSection from '@/components/main-banner'
import WhyRivexa from '@/components/WhyRivexa';
import SurfacePreparation from '@/components/SurfacePreparation';
import CastingWithRivexa from '@/components/castingRivexa';
import { fabricationCapabilities, fabricationData, fabricationFormData, fabricationIndustries, fabricationMaterials, fabricationServicesData, fabricationSourceData, fabricationSteps } from '@/data/fabricationData';
import CastSourcePromise from '@/components/castSource';
import ProcessSection from '@/components/castingStep';
import CoreProcess from '@/components/castingProcess';
import IndustryGrid from '@/components/IndustryGrid';
import MaterialCapabilities from '@/components/materialCapability';
import Capability from '@/components/capability';
import ValueAddedServices from '@/components/ValueAddedServices';
import DefectFreeCasting from '@/components/DefectFreeCasting';
import SupplierCertifications from '@/components/supplierCertifications';
import OtherManufacturingProcesses from '@/components/OtherManufacturingProcesses';

function Forging() {
    return (
        <main className="">
            <HeroSection image={"/images/fabrication-banner.png"} type="fabrication" />
            <CastingWithRivexa data={fabricationFormData} />
            <CastSourcePromise data={fabricationSourceData} />
            <ProcessSection
                title="The Fabrication Process"
                steps={fabricationSteps}
            />
            <CoreProcess data={fabricationData} />
            <IndustryGrid data={fabricationIndustries} />
            <MaterialCapabilities
                title="Material Capabilities for Diverse Industries"
                materials={fabricationMaterials}
            />
            <Capability data={fabricationCapabilities} />
            <ValueAddedServices data={fabricationServicesData} />
            <SurfacePreparation />
            <DefectFreeCasting />
            <WhyRivexa />
            <SupplierCertifications />
            <OtherManufacturingProcesses />
        </main>
    )
}

export default Forging