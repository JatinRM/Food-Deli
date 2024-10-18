import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Hello, my name is Jatin, and I built this food delivery website from scratch! The site allows users to explore menus, add items to the cart, enter their address, and securely complete payments using Stripe. It also has an admin panel to manage orders efficiently. This project showcases my skills in full-stack development and was a great learning experience! Thank you for visiting, and I hope you enjoy exploring it..</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-centre">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-7620574763</li>
                <li>jatinmahakal12@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Jatin Mahakal - All Right Reserved
      </p>
    </div>
  )
}

export default Footer
