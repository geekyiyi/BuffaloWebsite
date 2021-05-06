import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini9.jpg'

function OperationsAndMaintenance() {
    return (
        <div>
            <SubHeader title={"OPERATIONS AND MAINTENANCE"} />

            <ServiceContent parag1={'Our clients trust us with the long-term operations, management and maintenance of their critical public and private assets and infrastructure from water, power, roads and tunnels, schools and hospitals, to major telecommunications networks. We understand the valuable service they provide their customers, and our role in helping them deliver sustainable, high quality service at the lowest whole-of-life cost. Kordia can work with your business to drive enhanced operational efficiency, network quality and asset utilisation across your network operations, maintaining the highest compliance to OHS practices at all times. Underpinning all operations is Kordia s Global Network Operations Centre (GNOC) a 24/7 facility designed to monitor, diagnose, record and control a diverse range of customer networks. Our GNOC is also fully equipped to perform the management and administration of preventative, reactive and planned maintenance activities. Other mission-critical services we provide include：'} 
                            list = {['Field Services: day-to-day, hands-on operation and management of entire network infrastructure.','Project Management: complete management of projects, assets and Tier three support tailored to your needs.','Emergency and Critical Networks Management: our experienced team can provide support across:','Network and element management systems','Real-time alarming based on equipment status and/or configurable thresholds','Alarm logging and archiving','Remote reconfiguration of networks','Real-time remote fault analysis and rectification','Network moves, adds and changes','Multi-vendor support','Configurable outputs to control on-site managed devices.']}
                            parag2= {''}
                            subtitle={'COMPLETE NETWORK PERFORMANCE MONITORING AND MAINTENANCE'} 
                            picture={about}/>
        </div>
    )
}

export default OperationsAndMaintenance
