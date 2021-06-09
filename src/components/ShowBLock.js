import React from 'react'
import './ShowBlock.css'
import worker from '../images/green.jpg'

function ShowBLock() {
    return (
        <div className = 'showblock-container'>
        
            <div className = 'showblock-text-container'>
                <h2>OUR MISSION</h2>  
            </div>

            <div className = 'showblock-descrip'>
                <p>We are young communications engineering services company founded by experienced communication professionals in 2015. We began NBN FTTB(Fiber To TheBuilding) projects since 2015, helping nearly hundred of residents/commercials daily in connecting to NBN now. We began NBN HFC(Hybrid Fiber Coax)   since 2017 where partnership set up over hundreds community broadband fundamental constructions. </p>
                <br/>
                <p>Brightentechs has a market leading team of specialists on hand, with over 20 skilled professionals across Sydney area and partnered over 100 contractor workforces. Now the business is rapidly evolving, especially in NBN new technology   HFC and FTTC initiations.</p>
            </div>

            <div className = "showblock-card-container">
                   <div className ="showblock-card">
                       <div className="face face1">
                           <div className = "content">
                                <span>PROFESSIONAL</span>
                                <p>Resourced qualified and experienced personnel</p>
                           </div>
                       </div>

                       <div className="face face2">
                           <div className = "showblock-card-icon">
                               <i class="fas fa-tools"></i>
                           </div>

                           <span>PROFESSIONAL</span>
                       </div>
                   </div>

                   <div className ="showblock-card">
                       <div className="face face1">
                           <div className = "content">
                                <span>SAFE</span>
                                <p>Provide sufficient training before onboarding and throughout the job, review SWMS regularly. Above industry average insurance</p>
                           </div>
                       </div>

                       <div className="face face2">
                           <div className = "showblock-card-icon">
                               <i class="fas fa-shield-alt"></i>
                           </div>
                               <span>SAFE</span>
                       </div>
                   </div>

                   <div className ="showblock-card">
                       <div className="face face1">
                           <div className = "content">
                                <span>PROJECT MANAGEMENT</span>
                                <p>Efficient Project Management Team to ensure every project delivered on time, on quality and on budget.</p>
                           </div>
                       </div>

                       <div className="face face2">
                            <div className = "showblock-card-icon">
                               <i class="fas fa-clipboard-list"></i>
                            </div>
                           <span>PROJECT MANAGEMENT</span>
                       </div>
                   </div>
               </div>
          
        </div>
    )
}

export default ShowBLock
