import React from 'react'
import "./style/Footer.css"
import { Link } from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceIcon from '@mui/icons-material/Place';

import github from "../images/nike/home/pngimg.com - github_PNG37.png"


export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-lists'>
          <div className='footer-list-1'>
            <h5>GIFT CARDS</h5>
            <h5>PROMOTIONS</h5>
            <h5>FIND A STORE</h5>
            <h5>BECOME A MEMBER</h5>
            <h5>NIKE JOURNAL</h5>
            <h5>SEND US FEEDBACK</h5>
          </div>
          <div className='footer-list-2'>
            <h5>GET HELP</h5>
            <p>Order Status</p>
            <p>Shiping and Delivery</p>
            <p>Returnes</p>
            <p>Order Cancellation</p>
            <p>Payment Options</p>
            <p>Gift Card Balance</p>
            <p>Contact Us</p>
          </div>
          <div className='footer-list-3'>
            <h5>ABOUT NIKE</h5>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Purpose</p>
            <p>Sustainability</p>
          </div>
        </div>
        <div className='breakline'></div>
        <div className='footer-icons'>
          <Link><TwitterIcon /></Link>
          <Link><FacebookIcon /></Link>
          <Link><YouTubeIcon /></Link>
          <Link><InstagramIcon /></Link>
        </div>
      </div>

      <div className='footer-btm'>
        <div className='footer-btm-copyright'>
          <div><h5><PlaceIcon /></h5><h5>United States</h5></div>
          <p>&copy;2023 Nike, Inc. All Right Reserved</p>
        </div>
        <div className='footer-btm-github'>
          <a><img src={github}></img></a>
        </div>
      </div>
    </div>
  )
}
