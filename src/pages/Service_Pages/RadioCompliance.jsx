import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini4.jpg'

function RadioCompliance() {
    return (
        <div>
           <SubHeader title={"RADIO COMPLIANCE"} />

            <ServiceContent parag1={'Buffalo Innovation RF design/EME compliance team has in-depth industry knowledge through multi-vendor/supplier experiences. With the completion of more than 1,000 Greenfields and 2,000 upgrades/RANCAP national wide, our teams understand what customer s requirements are and achieve them with efficiency and effectiveness. Our teams are highly skilled and proficient in RF design/EME compliance services on the critical path during SAED phase including'} 
                    list = {['Coverage assessment & Capacity analysis','Optimal RF design Solutions with detailed plumbing diagram supplied','EME safety solutions and risk management','EME predictions','Near field point of interest (NFPOI) site design visit','ACMA assessment and registration','RFNSA STAD update, Environmental EME Report, and EME compliance audit.']}
                    parag2= {''}
                    subtitle={''} 
                    picture={about}/>            
            </div>
    )
}

export default RadioCompliance
