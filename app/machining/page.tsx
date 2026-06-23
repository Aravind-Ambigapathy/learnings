import CastingWithRivexa from '@/components/castingRivexa'
import HeroSection from '@/components/main-banner'
import React from 'react'
import WhyRivexa from '@/components/WhyRivexa';
import SurfacePreparation from '@/components/SurfacePreparation';
import { machiningCapabilities, machiningData, machiningFormData, machiningIndustries, machiningMaterials, machiningServicesData, machiningSourceData, machiningSteps } from '@/data/machiningData';
import CastSourcePromise from '@/components/castSource';
import ProcessSection from '@/components/castingStep';
import CoreProcess from '@/components/castingProcess';
import IndustryGrid from '@/components/IndustryGrid';
import MaterialCapabilities from '@/components/materialCapability';
import Capability from '@/components/capability';
import ValueAddedServices from '@/components/ValueAddedServices';
import QualityInspection from '@/components/qualityinspection';
import SupplierCertifications from '@/components/supplierCertifications';
import OtherManufacturingProcesses from '@/components/OtherManufacturingProcesses';

function Forging() {
    return (
        <main className="">
            <HeroSection image={"/images/mechining-banner.png"} type="mechining" />
            <CastingWithRivexa data={machiningFormData} />
            <CastSourcePromise data={machiningSourceData} />
            <ProcessSection
                title="The Machining Process"
                steps={machiningSteps}
            />
            <CoreProcess data={machiningData} />
            <IndustryGrid data={machiningIndustries} />
            <MaterialCapabilities
                title="Material Capabilities for Diverse Industries"
                materials={machiningMaterials}
            />
            <Capability data={machiningCapabilities} />
            <ValueAddedServices data={machiningServicesData} />
            <QualityInspection />
            <WhyRivexa />
            <SupplierCertifications />
            <OtherManufacturingProcesses />

        </main>
    )
}

export default Forging