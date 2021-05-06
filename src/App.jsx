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
          <Route exact path="/safetytools" component={RadioFrequencySystems} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
