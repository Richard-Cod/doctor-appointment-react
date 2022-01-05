import React from 'react'
import BaseLayout from '../../templates/layout/BaseLayout'
import AvailableFeatures from './components/AvailableFeatures'
import ClinicAndSpecialities from './components/ClinicAndSpecialities'
import HomeBanner from './components/HomeBanner'
import PopularSection from './components/PopularSection'

function HomePage() {
    return (
        <BaseLayout>
            <HomeBanner />
            <ClinicAndSpecialities />
            <PopularSection />
            <AvailableFeatures />
        </BaseLayout>
    )
}

export default HomePage
