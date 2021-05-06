import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini5.jpg'

function PropertyPlanning() {
    return (
        <div>
           <SubHeader title={"PROPERTY/PLANNING"} />

            <ServiceContent parag1={'Our team has extensive experience in delivering strategic roadmaps for large-scale Telecommunications and Infrastructure projects. At SkyComms we provide specialist consulting advice within Property and Town Planning domains such as:'} 
                    list = {['Site Acquisition','Property Due Diligence','Property Management and Lease Administration','Lease / License Negotiation','Town Planning and Environment Assessment','Stakeholder Engagement','Community Consultation']}
                    parag2= {''}
                    subtitle={''} 
                    picture={about}
            />               
        </div>
    )
}

export default PropertyPlanning
