import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini12.jpg'

function AcmaLicensing() {
    return (
        <div>
             <SubHeader title={"ACMA LICENSING"} />

<ServiceContent parag1={'If you are planning to build, install or upgrade your radio communications network, our ACMA-accredited Buffalo Innovation engineers can help you achieve compliance to meet your Australian Communications and Media Authority (ACMA) licensing obligations. ACMA engages Buffalo Innovation to provide submissions on a range of topics and we also participate in their working groups to deliver feedback on technical and information papers before their general release. Given Buffalo Innovation s depth of knowledge and relationship with ACMA, we are skilled in helping customers simplify and help with what can be a lengthy compliance process.'} 
        list = {[]}
        parag2= {''}
        subtitle={'SOLUTIONS TO MEET ALL TECHNICAL AND REGULATORY REQUIREMENTS'} 
        picture={about}/>
        </div>
    )
}

export default AcmaLicensing
