import React from 'react';
import TripCSS from './../Trips/Trips.module.css';

import Button from 'react-bootstrap/Button';
 
import trip01 from './../../assets/Trips01.jpg';
import trip02 from './../../assets/Trips02.jpg';
import trip03 from './../../assets/Trips03.jpg';
import trip04 from './../../assets/Trips04.jpg';
import trip05 from './../../assets/Trips05.jpg';
import trip06 from './../../assets/Trips06.jpg';
import trip07 from './../../assets/Trips07.jpg';
import trip08 from './../../assets/Trips08.jpg';


function Trips() {
  return (
    <div className={`${TripCSS.trips_wrapper}section`}>
      <h2>Popular Trips</h2>

        <div className={TripCSS.cards}>

          <div className={TripCSS.card}>
            <img src={trip01} alt="err"/>
              <div className={TripCSS.TripContent}>
                <div className={TripCSS.rating}>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-half-fill'></i>
                </div>
                   <h3>Australia Panorama</h3>
                   <div className={TripCSS.TripDetails}>
                      <span><i className='ri-calender-line'></i>7 days</span>
                      <span><i className='ri-map-pin-line'></i>5 places</span>
                      <span><i className='ri-flag-line'></i>Australia</span>
                   </div>
                   <div className={TripCSS.Pricing}>
                     <span className={TripCSS.price}>$1200</span>
                     
                     <Button variant="primary" className={TripCSS.book}>Book Now</Button>
                    

                </div>


              </div>
            
            </div>
            <div className={TripCSS.card}>
            <img src={trip02} alt="err"/>
              <div className={TripCSS.TripContent}>
                <div className={TripCSS.rating}>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-half-fill'></i>
                </div>
                   <h3>Best of Spain</h3>
                   <div className={TripCSS.TripDetails}>
                      <span><i className='ri-calender-line'></i>5 days</span>
                      <span><i className='ri-map-pin-line'></i>15 places</span>
                      <span><i className='ri-flag-line'></i>Spain</span>
                   </div>
                   <div className={TripCSS.Pricing}>
                     <span className={TripCSS.price}>$1850</span>
                     
                     <Button variant="primary" className={TripCSS.book}>Book Now</Button>
                    

                   </div>
                   

              </div>
            
            </div>
            <div className={TripCSS.card}>
            <img src={trip03} alt="err"/>
              <div className={TripCSS.TripContent}>
                <div className={TripCSS.rating}>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-half-fill'></i>
                </div>
                   <h3>Canonlands</h3>
                   <div className={TripCSS.TripDetails}>
                      <span><i className='ri-calender-line'></i>15 days</span>
                      <span><i className='ri-map-pin-line'></i>8 places</span>
                      <span><i className='ri-flag-line'></i>Italy</span>
                   </div>
                   <div className={TripCSS.Pricing}>
                     <span className={TripCSS.price}>$1200</span>
                     
                     <Button variant="primary" className={TripCSS.book}>Book Now</Button>
                    

                   </div>
                   

              </div>
            
            </div>
            <div className={TripCSS.card}>
            <img src={trip04} alt="err"/>
              <div className={TripCSS.TripContent}>
                <div className={TripCSS.rating}>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-half-fill'></i>
                </div>
                   <h3>Australia Panorama</h3>
                   <div className={TripCSS.TripDetails}>
                      <span><i className='ri-calender-line'></i>7 days</span>
                      <span><i className='ri-map-pin-line'></i>5 places</span>
                      <span><i className='ri-flag-line'></i>Australia</span>
                   </div>
                   <div className={TripCSS.Pricing}>
                     <span className={TripCSS.price}>$1200</span>
                     
                     <Button variant="primary" className={TripCSS.book}>Book Now</Button>
                    

                   </div>
                   

              </div>
            
            </div>
            <div className={TripCSS.card}>
            <img src={trip05} alt="err"/>
              <div className={TripCSS.TripContent}>
                <div className={TripCSS.rating}>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-half-fill'></i>
                </div>
                   <h3>Australia Panorama</h3>
                   <div className={TripCSS.TripDetails}>
                      <span><i className='ri-calender-line'></i>7 days</span>
                      <span><i className='ri-map-pin-line'></i>5 places</span>
                      <span><i className='ri-flag-line'></i>Australia</span>
                   </div>
                   <div className={TripCSS.Pricing}>
                     <span className={TripCSS.price}>$1200</span>
                     
                     <Button variant="primary" className={TripCSS.book}>Book Now</Button>
                    

                   </div>
                   

              </div>
            
            </div>

            <div className={TripCSS.card}>
            <img src={trip08} alt="err"/>
              <div className={TripCSS.TripContent}>
                <div className={TripCSS.rating}>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-half-fill'></i>
                </div>
                   <h3>Australia Panorama</h3>
                   <div className={TripCSS.TripDetails}>
                      <span><i className='ri-calender-line'></i>7 days</span>
                      <span><i className='ri-map-pin-line'></i>5 places</span>
                      <span><i className='ri-flag-line'></i>Australia</span>
                   </div>
                   <div className={TripCSS.Pricing}>
                     <span className={TripCSS.price}>$1200</span>
                     
                     <Button variant="primary" className={TripCSS.book}>Book Now</Button>
                    

                   </div>
                   

              </div>
            
            </div>

          <div className={TripCSS.card}>
            <img src={trip07} alt="err"/>
              <div className={TripCSS.TripContent}>
                <div className={TripCSS.rating}>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-half-fill'></i>
                </div>
                   <h3>Australia Panorama</h3>
                   <div className={TripCSS.TripDetails}>
                      <span><i className='ri-calender-line'></i>7 days</span>
                      <span><i className='ri-map-pin-line'></i>5 places</span>
                      <span><i className='ri-flag-line'></i>Australia</span>
                   </div>
                   <div className={TripCSS.Pricing}>
                     <span className={TripCSS.price}>$1200</span>
                     
                     <Button variant="primary" className={TripCSS.book}>Book Now</Button>
                    

                   </div>
                   

              </div>
            
            </div>
            <div className={TripCSS.card}>
            <img src={trip06} alt="err"/>
              <div className={TripCSS.TripContent}>
                <div className={TripCSS.rating}>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-fill'></i>
                  <i className='ri-star-half-fill'></i>
                </div>
                   <h3>Australia Panorama</h3>
                   <div className={TripCSS.TripDetails}>
                      <span><i className='ri-calender-line'></i>7 days</span>
                      <span><i className='ri-map-pin-line'></i>5 places</span>
                      <span><i className='ri-flag-line'></i>Australia</span>
                   </div>
                   <div className={TripCSS.Pricing}>
                     <span className={TripCSS.price}>$1200</span>
                     
                     <Button variant="primary" className={TripCSS.book}>Book Now</Button>
                    

                   </div>
                   

              </div>
            
            </div>


            

          </div>
      
    </div>
  )
}

export default Trips
