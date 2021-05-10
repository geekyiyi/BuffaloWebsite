import React from 'react'
import { SubHeader } from "../../components/SubHeader";
import { ServiceContent } from "../../components/ServiceContent";
import about from '../../images/mini2.jpg'

function ProjectManagement() {
    return (
        <div>
            <SubHeader title={"PROJECT MANAGEMENT"} />

            <ServiceContent parag1={'With extensive experience in the telecommunications industry, our teams are uniquely specialised to manage the project through its entire life cycle of planning, approvals, funding, and delivery. Buffalo Innovation specialise in'} 
                      list = {['identifying key customer initiatives','engaging with stakeholder teams','managing the change process','developing project controls','identifying and managing risk','managing design & construction','and, completing the handover process']}
                      parag2= {'Buffalo Innovation maintains all accountability at the director level. With the cope of projects we manage, we ensure our senior management are involved across each project, controlling the delivery and overseeing customised teams tailored for each project and client. Our project team has PMI accreditation and follow PMI best practice, making sure we deliver on customer objectives within agreed time and cost parameters, and constantly assessing the budget and value for money at every stage, which in turn delivers the best outcomes for our clients. To ensure on-time and clean projects, our teams utilise Site Tracker , the only full life-cycle tracker platform to deliver timely outcomes.'}
                      subtitle={"Every project is different and our teams start through a consultation process where we allocate time firstly understanding your key objectives We continue through our consultation process and start planning. Our aim is to always minimise risk and optimise projects, whether they are property, planning, design, build or maintenance programs."} 
                      picture={about}/>
            
        </div>
    )
}

export default ProjectManagement
