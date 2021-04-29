
import { Navigation } from "./components/navigation";
import Home from "./pages/Home"
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar/Navbar"
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <>
      <Router>
      <Navigation />
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          {/* <Route exact path="/contact-us" component={ContactUs} /> */}
        </Switch>
        <Footer />
      </Router>

    </>
  );
};

export default App;
