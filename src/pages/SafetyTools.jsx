import React from "react";
import { SubHeader } from "../components/SubHeader";
import { ServiceContent } from "../components/ServiceContent";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import about from '../images/about.jpg'

const SafetyTools = () => {
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <SubHeader title={"SAFETY & TOOLS"} />
      <ServiceContent parag1={'Buffalo Innovation leverages the industry-leading Sitetracker Technology Stack and analytics to give our clients a competitive advantage, helping them to operate more effectively and at lower cost. Recognising the strategic value of data and value to our clients, we are increasing our investment and expanding our Technology Stack and analytics capabilities. Buffalo Innovation has a deep understanding of the Australian Telecommunications industry. We work in and recognise the value of collaborative tools and data in these industries. Using the combination of experience and data, we give our clients tools to embrace change and build sustainable businesses. We achieve this using the application layer including the data model, business logic, and UI for the #1 leading platform for high volume program and asset management. This application layer provides transparency within our operations as well as Sour downstream stakeholders and upstream customers, specifically'} 
                      list = {['Project templates and tracking',  'Project finance',  'Tracking time and project approvals',  'Tracking site management and mapping',  'Document markup in project cycles',  'Checklists for EHS', 'site visits', 'audit and acceptance',  'Work field management',  'Asset and inventory management']}
                      parag2= {''}
                      subtitle={"Sitetracker"} 
                      picture={about}/>
    </div>
  );
};

export default SafetyTools;
