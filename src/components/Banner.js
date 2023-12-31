import React from 'react'
import {apartmanetDetails} from '../dataFile.js';

function Banner() {
  return (
    <section>
      <div className='banner'>
        <div className='banner_img'>
        <img src ={apartmanetDetails.banner.img_url} alt=''/>
        </div>
        <div className='banner_details'>
            <h1 className='banner_heading'>
                {apartmanetDetails.banner.heading}
            </h1>
            <h3 className='banner_subheading'>
                {apartmanetDetails.banner.subheading}
            </h3>
            <h5 className='banner_desc'>
                {apartmanetDetails.banner.desc}
            </h5>
            <div className='banner_rating_location'>
               <div className='banner_rating'>
               <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                 <b>{apartmanetDetails.banner.rating}</b> &nbsp;
                ({apartmanetDetails.banner.review})reviews
                </div>
                <div className='banner_location'>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="8" viewBox="0 0 384 512">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    {apartmanetDetails.banner.location}
                </div>
            </div>
            <p className='banner_para'>
                {apartmanetDetails.banner.para}
            </p>
            <div className='banner_price'>
                {apartmanetDetails.banner.price}  <span style={{ verticalAlign: "super" }}>/per month</span>
            </div>
         <button className='banner_btn'>{apartmanetDetails.banner.button}</button> 
        </div>
        </div>
    </section>
    
  )
}

export default Banner