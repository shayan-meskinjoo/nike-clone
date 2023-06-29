import React from 'react'
import "./style/MemberShip.css"
import membership from "../images/nike/home/5e4a0ef7-a2c9-483a-8e5b-45d8277db19d.webp";
import membershipmobile from "../images/nike/home/sign-in.webp";

export default function MemberShip() {
  return (
    <div>
      <div className="container">
        <p>Nike Membership</p>
        <div className="container-wide">
          <img src={membership}></img>
          <div className="container-info">
            <h1>BECOME A MEMBER</h1>
            <p>sign up for free. Join the community.</p>
            <button>Join Us</button>
            <button>Sign In</button>
          </div>
        </div>

        <div className="container-mobile">
          <img src={membershipmobile}></img>
          <div className="container-mobile-info">
            <h1>BECOME A MEMBER</h1>
            <p>sign up for free. Join the community.</p>
            <button>Join Us</button>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}
