import React from "react";
import { SubHeader } from "../components/SubHeader";
import { ServiceContent } from "../components/ServiceContent";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";

const SafetyTools = () => {
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <SubHeader title={"SAFETY & TOOLS"} />
      <ServiceContent data={landingPageData.Site} subtitle={"Sitetracker"} />
    </div>
  );
};

export default SafetyTools;
