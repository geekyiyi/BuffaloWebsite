import React from 'react'
import { SubHeader } from "../components/SubHeader";
import { ServiceContent } from "../components/ServiceContent";
import about from '../images/mini8.jpg'

function Career() {
    return (
        <div>
            <SubHeader title={"CAREER"} />

            <ServiceContent parag1={'Positions we are always hiring for:'} 
                    list = {['Project Managers','Civil Engineers','Project Engineers','EME Design Engineers','Site Design Engineers','Electricians','Telecommunication Riggers','Telecommunication Technicians','Site Access Coordinator','Document Controller','RF/IBC Designers']}
                    parag2= {''}
                    subtitle={'Become Part of a Professional Team Working on Key Telecommunications Projects across Australia'} 
                    picture={about}/>
        </div>
    )
}

export default Career
