import CastingWithRivexa from '@/components/castingRivexa'
import CastSourcePromise from '@/components/castSource'
import HeroSection from '@/components/main-banner'
import React from 'react'
import { forgingSteps } from "@/data/forgingSteps";
import ProcessSection from '@/components/castingStep';
import CoreProcess from '@/components/castingProcess';
import { forgingCapabilities, forgingData, forgingFormData, forgingIndustries, forgingMaterials, forgingServicesData, forgingSourceData } from '@/data/forgingData';
import IndustryGrid from '@/components/IndustryGrid';
import MaterialCapabilities from '@/components/materialCapability';
import Capability from '@/components/capability';
import WhyRivexa from '@/components/WhyRivexa';
import SurfacePreparation from '@/components/SurfacePreparation';
import ValueAddedServices from '@/components/ValueAddedServices';

function Forging() {
    return (
        <main className="">
            <HeroSection image={"/images/forging-banner1.png"} type="forging" />
            <CastingWithRivexa  data={forgingFormData} />
            <CastSourcePromise data={forgingSourceData}/>
            <ProcessSection
                title="The Forging Process"
                steps={forgingSteps}
            />
            <CoreProcess data={forgingData} />
            <IndustryGrid data={forgingIndustries} />
            <MaterialCapabilities
                title="Material Capabilities for Diverse Industries"
                materials={forgingMaterials}
            />
            <Capability data={forgingCapabilities}/>
            <ValueAddedServices   data={forgingServicesData}/>
            <SurfacePreparation />
            <WhyRivexa />



        </main>
    )
}

export default Forging