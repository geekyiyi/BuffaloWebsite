import React from 'react'
import './ShowBlock.css'
import worker from '../images/green.jpg'

function ShowBLock() {
    return (
        <div className = 'showblock-container' id='about-us'>
        
            <div className = 'showblock-text-container'>
                <h2> We’re committed to being industry leaders in our chosen but diversified fields. Providing high quality, safety focused results within budget.</h2>  
                <p>Buffalo Group is a unique and diverse organisation providing expertise, means and co-ordinated project delivery in a variety of fields, across a number of industries. We provide a vast suite of construction services across the civil infrastructure, mining, electrical, telecommunications industries as well as government funded projects. Buffalo has a reputation, and prides itself on providing co-ordinated project delivery with an uncompromised focus on quality and safety. Our motivated, and experienced team is available to work on any sized project throughout the East Coast of Australia. We house an extensive fleet of plant, machinery and equipment that can be mobilized to site. Buffalo has fully equipped vehicles and trucks, and a range of tippers, crane trucks and plant machinery, we have everything required to complete your next project. Buffalo Group are in sync with the needs of our clients and have a strong network of like-minded businesses that provide complimentary services where required to provide our clients with one-stop, packaged solutions. This eliminates the need for our clients to manage multiple suppliers and contractors.</p>          
            </div>

            <div className='showblock-pic-container'>
                <img scr ={require('../images/worker.jpg')} alt = 'sidePost'/>
            </div>
        </div>
    )
}
export default ShowBLock
