import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini10.jpg'

function FieldServices() {
    return (
        <div>
             <SubHeader title={"FIELD SERVICES"} />

<ServiceContent parag1={'Our Field Services delivery team works collaboratively with a range of customers to deliver quality and timely on-site and premise connections throughout Australia and New Zealand. Key areas we specialise in include:'} 
        list = {['Installation of new service drop cables from the main network (multi-port) through to the customer premises.','Utilising the existing pit and pipe infrastructure or installing new conduits incorporating trenching, boring, concrete cutting and core boring.','Installation of customer premises wiring','Installation of the Premises Connection Device and the Network Termination Device as well as battery back unit if required.','Our entire field service delivery activities are based around exceptional customer service and meeting specified times, scheduled through our national work management centre and distributed and closed out through specific systems integrating both our client and internal requirements.']}
        parag2= {'Operating a large scale and geographically dispersed workforce, having access to remote and regional sites – as well as the ability to navigate city and suburban landscapes – are key to our success. We understand what mission-critical means and our customer-centric approach means we have your organisation’s reputation top of mind at all times.'}
        subtitle={'DELIVERING TECHNICAL EXPERTISE & QUALITY INSTALLATIONS'} 
        picture={about}/>
        </div>
    )
}

export default FieldServices
