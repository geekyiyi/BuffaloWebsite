import React from 'react';
// import '../../App.css'
import HeroSection from '../components/HeroSection';
import Try from '../components/Try';
import picture from '../images/bgi2.jpg';
import ShowBLock from "../components/ShowBLock";
function Home(){
    return(
        <div>
            <HeroSection bgImg = {picture} header = 'Buffalo Innovation' subheader = 'Leading 5G company' />
            <ShowBLock/>
            <Try/>
        </div>
    )
}

export default Home;