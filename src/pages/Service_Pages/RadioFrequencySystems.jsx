import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini8.jpg'

function RadioFrequencySystems() {
    return (
        <div>
            <SubHeader title={"RADIO FREQUENCY SYSTEMS"} />

            <ServiceContent parag1={'Our software tools are regularly updated with new technology releases and base planning data to ensure accuracy and integrity of designs. Buffalo Innovation also owns its own propagation measurement systems for most of the significant wireless bands so we can ensure the best possible prediction accuracy for all our wireless designs, and help minimise potential prediction errors. Our team can help you with:'} 
                    list = {['RF and capacity planning whilst working within existing network topology and infrastructure constraints','Network optimisation based on network performance statistical analysis and drive test analysis','Parameter and configuration audit and modelling','Network feature testing and implementation']}
                    parag2= {'Design expertise Our design team creates thousands of designs every year across multiple technologies. These range from RF configuration for mobile bases stations to heavy-duty broadcast transmitter designs. Our biggest design volumes are in MPLS, IP and D-DWDM and have included design for major carrier long-haul links. Engineering solutions Buffalo Innovation engineers have the knowledge and experience to design RF solutions for even the most challenging sites, all while being considerate to any existing site facilities and tower infrastructure limitations. Our engineers also understand that RF designs for each site need to provide both optimum-planned RF coverage performance, whilst accommodating peculiarities of each tower or rooftop and its capability in supporting lengths and weight of feeders and remote equipment.'}
                    subtitle={'THE LATEST TOOLS AND SYSTEMS FOR WIRELESS & TRANSPORT PLANNING.'} 
                    picture={about}/>
        </div>
    )
}

export default RadioFrequencySystems
