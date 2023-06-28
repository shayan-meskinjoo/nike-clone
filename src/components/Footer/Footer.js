import React from 'react'
import "./style/Footer.css"
import { Link } from 'react-router-dom'

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
          <div className='footer-lidt-2'>
            <h5>GET HELP</h5>
            <p>Order Status</p>
            <p>Shiping and Delivery</p>
            <p>Returnes</p>
            <p>Order Cancellation</p>
            <p>Payment Options</p>
            <p>Gift Card Balance</p>
            <p>Contact Us</p>
          </div>
          <div className='footer-lidt-3'>
            <h5>ABOUT NIKE</h5>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Purpose</p>
            <p>Sustainability</p>
          </div>
        </div>
        <div className='footer-icons'>
          <h2>some Icons</h2>
        </div>
      </div>
    </div>
  )
}
