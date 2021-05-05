import React from 'react'
import './Service.css'
import download from "../images/download.jpg"

function Service() {
    return (
        
            <div className = 'page-container'>

               <div className = 'background-image'/>

               <div className = 'service-content-container'>
                    <div className = 'service-name-bar'>
                        <h5>SAFETY & TOOLS</h5>
                    </div>

                    <div className = 'service-content-description-zone'>
                        <div className = 'service-description-text'>
                            <h3>THE LATEST TOOLS AND SYSTEMS FOR WIRELESS & TRANSPORT PLANNING.</h3>
                        </div>
                        <div className ='service-picture-zone'>
                            <img src={download} alt="sample image"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                        </div>
                    </div>
               </div>
            </div>
        
    )
}

export default Service
