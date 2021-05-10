import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini6.jpg'

function NetworkConstruction() {
    return (
        <div>
             <SubHeader title={"Network Construction"} />

            <ServiceContent parag1={'As base station technologies shift and improve, carriers need to upgrade their equipment. Our team is not only familiar with all base station technologies but also experienced in microwave deployment. We strive to make any equipment upgrade as streamlined as possible, not exceeding the approved outage window. Buffalo Innovation teams work on the major telecommunication carriers infrastructure in Australia to deliver the timely and ongoing upgrading of base station technologies in metropolitan, rural and remote areas. Our teams are equipped to work on towers, masts or monopoles and building rooftops in high-density areas, to ensure the best possible coverage. SCA have been upgrading networks for 20 years and provide projects with extensive experience and knowledge in'} 
                    list = {['RAN capacity – 2G / 3G / 4G / 5G LTE upgrade and cut-over specialist','Transmission upgrade','Power | Facility upgrade']}
                    parag2= {''}
                    subtitle={'Providing ongoing Network Upgrading Support Australia-Wide'} 
                    picture={about}/> 
            <ServiceContent parag1={'Buffalo Innovation is recognised as a leader in engineering design by the telecommunications services and contracting industry. Our talented in-house design and engineering teams draw from experience gained from international equipment suppliers, ICT multinationals, overseas telcos and Australian telecommunications mobile carriers. Buffalo Innovation s disciplines and specialties include civil and structural:'} 
                    list = {['Tower','Radio frequency (wireless systems and spectrum usage)','Fibre and optical','Copper','Electrical and power']}
                    parag2= {'We understand the operational challenges faced by our customers, where network up time is critical and budgets are often locked in. As a vendor-independent partner, our focus in on delivering the best technology solution to fit your project s quality, time and budget challenges, without prejudice. Our engineers and consultants are skilled in writing telecommunications design specifications, developing high level designs, detailed designs, and providing project governance, implementation and integration services.'}
                    subtitle={'OUR ENGINEERS ARE EXPERTS IN DELIVERING BEST-OF-BREED SOLUTIONS'} 
                    />     
        </div>
    )
}

export default NetworkConstruction
