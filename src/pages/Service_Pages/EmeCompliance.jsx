import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini11.jpg'

function EmeCompliance() {
    return (
        <div>
             <SubHeader title={"EME COMPLIANCE"} />

<ServiceContent parag1={'Kordia can assist you with electromagnetic energy (EME) compliance for your transmitter antennas, EME management for a new network, or RF safety awareness in general. Our experienced EME services team provides high level consulting and concise EME reports and training. Our EME drawings clearly and accurately show the RF zones of active antennas, making it easier for you to manage EME safety onsite. If you need to confirm EME levels in your environment, you can also take advantage of our NATA accredited EME measurement services. Kordia provide quality EME safety solutions:'} 
        list = {['NATA accredited EME predictions using the latest software','NATA accredited onsite field measurements','ACEBR accredited RF Safety Awareness training','EME consultancy services including policy writing, and high level EME analysis.']}
        parag2= {'Our experienced NATA accredited EME services team are experts at using the latest 3D modelling software to produce ARPANSA reports, Preliminary Radiation Designs, EME Guides and Site Compliance Certificates. We have performed more than one thousand field-based RF EME safety surveys at broadcast and telecommunications sites across Australia, New Zealand and the Asia Pacific region. Our assessments help ensure the safety of your workers on towers and for the public in accessible areas around RF sites. RF Safety Awareness Training Our industry training, recognised by ACEBR, is ideal for design engineers, supervisors, Occupational Health Safety and Environmental committees, and anyone visiting a broadcast or telecommunication site. Our course content is customised to our audience s technical background and experience and can be tailored further to suit your specific EME work site and company policy.'}
        subtitle={'MAKING IT EASIER TO MANAGE EME SAFETY ONSITE'} 
        picture={about}/>
        </div>
    )
}

export default EmeCompliance
