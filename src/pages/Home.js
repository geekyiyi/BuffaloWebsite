import React from 'react';
// import '../../App.css'
import HeroSection from '../components/HeroSection';
import Try from '../components/Try';
import picture from '../images/green.jpg';
import ShowBLock from "../components/ShowBLock";
function Home(){
    return(
        <div>
            <div className ='home-hero-container'>
              <HeroSection bgImg = {picture} header = 'Buffalo Innovation' subheader = 'Leading 5G company' />
            </div>
            <ShowBLock/>
            <Try/>
        </div>
    )
}

export default Home;