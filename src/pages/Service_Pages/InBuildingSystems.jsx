import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini7.jpg'

function InBuildingSystems() {
    return (
        <div>
             <SubHeader title={"IN-BUILDING SYSTEMS"} />

            <ServiceContent parag1={'With experience working on both greenfield and brownfield sites, the SkyComms team has worked across some of the most complex DAS projects within Australia. Due to the unique nature of each venue, no single, cookie cutter system can be constructed, making DAS a complex system to implement. SkyComms have managed projects of all sizes and with this experience, we have a high-calibre of technical professionals to support your project with the design, install and maintenance for middle-rise commercial, high-rise apartments, hospitals, stadiums, shopping centres, Universities and Government buildings. Our team will work with you through every step of the process, starting with the initial site RF assessment, final design and permit stages, to the installation of the system and ongoing support and maintenance. SkyComms services include:'} 
                    list = {['Site Acquisition','Property Due Diligence','Property Management and Lease Administration','Lease / License Negotiation','Town Planning and Environment Assessment','Stakeholder Engagement','Community Consultation']}
                    parag2= {''}
                    subtitle={''} 
                    picture={about}/>

            <ServiceContent parag1={'As demand for wireless voice and data services increases, so does the need for robust and reliable mobile coverage. Kordia s Wireless Coverage Solutions Group can help you achieve coverage in the most challenging environments from corporate offices to busy airport terminals and underground work sites and tunnels. We have experience with:'} 
                                list = {['Office and commercial buildings','Underground roads and tunnels','Campus environments','Factories and warehouses','Stadiums','Shopping centres','Hospitals, universities and airports']}
                                parag2= {'Our services encompass sophisticated in-building system design, coverage modelling software, RF scanner and mobile measurement, and inter-modulation measurement, enabling us to deliver a wide spectrum of solutions. Kordia s Wireless Coverage Solutions Group is also well versed in wireless technologies for the mobile (3G UMTS/WCDMA, 4G LTE), public safety (APCO p25, Tetra, DMR, PMR), and Information Technology industries (802.11x) providing bespoke solutions for the growing wireless convergence market.'}
                                subtitle={'SPECIALISED IN-BUILDING COVERAGE AND CAPACITY SOLUTIONS'} 
                                />
        </div>
    )
}

export default InBuildingSystems
