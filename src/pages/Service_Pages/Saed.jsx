import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini13.jpg'

function Saed() {
    return (
        <div>
            <SubHeader title={"SAED - SITE ACQUISITION, ENVIRONMENT & DESIGN"} />

            <ServiceContent parag1={'At Kordia, we understand the site acquisition phase often holds the least certainty, yet influences all dependant activities and stakeholders. Successful site acquisition and effective design are key to project success and total costs of ownership, which is why we offer complete management of Greenfield, co-location and upgrades across macro, small cells and in-building solutions. Kordia s national SAED team comprises highly experienced property, town planning and engineering design staff all of which are able to provide either stand-alone specific SAED services, or fully integrate the SAED function into wider projects and programs to offer complete end-to-end solutions for both wireless and fixed network deployments. Our expert team is able undertake a wide range of services including: Property Services'} 
                    list = {['Site investigation and Candidate Identification','Master Access & Facilities Access Agreement negotiations','Lease and commercial negotiations','Tenure execution and legal services','Co-location process management','Lease renewal and portfolio management']}
                    parag2= {''}
                    subtitle={'COMPLETE SAED MANAGEMENT - FROM START TO FINISH'} 
                    picture={about}/>
        </div>
    )
}

export default Saed
