import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini3.jpg'

function Design() {

    return (
        <div>
            <SubHeader title={"Design"} />

            <ServiceContent parag1={'With experience working on both greenfield and brownfield sites, the SkyComms team has worked across some of the most complex DAS projects within Australia. Due to the unique nature of each venue, no single, cookie cutter system can be constructed, making DAS a complex system to implement. SkyComms have managed projects of all sizes and with this experience, we have a high-calibre of technical professionals to support your project with the design, install and maintenance for middle-rise commercial, high-rise apartments, hospitals, stadiums, shopping centres, Universities and Government buildings. Our team will work with you through every step of the process, starting with the initial site RF assessment, final design and permit stages, to the installation of the system and ongoing support and maintenance.SkyComms services include:'} 
                      list = {['RF Macro coverage walk test','Preliminary RF design','Final RF Design','DAS Installation','PIM testing','Sweep testing','Carrier Coordination',' Integration and Optimisation']}
                      parag2= {''}
                      subtitle={""} 
                      picture={about}/>

        
            <ServiceContent parag1 ={'Kordia is recognised as a leader in engineering design by the telecommunications services and contracting industry. Our talented in-house design and engineering teams draw from experience gained from international equipment suppliers, ICT multinationals, overseas telcos and Australian telecommunications mobile carriers. Kordia s disciplines and specialties include civil and structural:'}
                            list={['Tower','Radio frequency (wireless systems and spectrum usage)','Fibre and optical','Copper','Electrical and power']}
                            parag2={'We understand the operational challenges faced by our customers, where network up time is critical and budgets are often locked in. As a vendor-independent partner, our focus in on delivering the best technology solution to fit your project s quality, time and budget challenges, without prejudice. Our engineers and consultants are skilled in writing telecommunications design specifications, developing high level designs, detailed designs, and providing project governance, implementation and integration services.'}
                            subtitle={'OUR ENGINEERS ARE EXPERTS IN DELIVERING BEST-OF-BREED SOLUTIONS'}

            />
            
        </div>
    )
}

export default Design