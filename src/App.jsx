import { Navigation } from "./components/navigation";
import Home from "./pages/Home";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar/Navbar"
import Service from "./pages/Service"
import ContactUs from './pages/ContactUs'
import SafetyTools from "./pages/SafetyTools";
import ProjectManagement from './pages/Service_Pages/ProjectManagement'
import Design from './pages/Service_Pages/Design'
import RadioCompliance from './pages/Service_Pages/RadioCompliance'
import PropertyPlanning from './pages/Service_Pages/PropertyPlanning'
import NetworkConstruction from './pages/Service_Pages/NetworkConstruction'
import InBuildingSystems from './pages/Service_Pages/InBuildingSystems'
import RadioFrequencySystems from './pages/Service_Pages/RadioFrequencySystems'
import Career from './pages/Career'
import OperationsAndMaintenance from './pages/Service_Pages/OperationsAndMaintenance'
import FieldServices from './pages/Service_Pages/FieldServices'
import EmeCompliance from './pages/Service_Pages/EmeCompliance'
import AcmaLicensing from './pages/Service_Pages/AcmaLicensing'
import Saed from './pages/Service_Pages/Saed'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <>
      <Router>
        {/* <Navigation /> */}
        <Navbar />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          {/* <Route exact path="/service" component={Service} /> */}
          <Route exact path="/career" component={Career} />
          <Route exact path="/contact-us" component={ContactUs} />    
          <Route exact path="/safetytools" component={SafetyTools} />
          <Route exact path="/saed" component={Saed} />
          <Route exact path="/projectmanagement" component={ProjectManagement} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/radioCompliance" component={RadioCompliance} />
          <Route exact path="/propertyPlanning" component={PropertyPlanning} />
          <Route exact path="/networkConstruction" component={NetworkConstruction} />
          <Route exact path="/inBuildingSystems" component={InBuildingSystems} />
          <Route exact path="/radioFrequencySystems" component={RadioFrequencySystems} />
          <Route exact path="/operationsAndMaintenance" component={OperationsAndMaintenance} />
          <Route exact path="/fieldServices" component={FieldServices} />
          <Route exact path="/emeCompliance" component={EmeCompliance} />
          <Route exact path="/acmaLicensing" component={AcmaLicensing} />



          
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
