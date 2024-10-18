import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
    <div className="f-cotainer">
        <div className="f-icons">
            <Link to={'https://www.facebook.com/profile.php?id=100053252281640&mibextid=ZbWKwL'}><i className="fa-brands fa-square-facebook"></i></Link>
            <Link to={'https://github.com/Niteshzzzzz/Country-Project-In-React'}><i className="fa-brands fa-square-github"></i></Link>
            <Link to={'https://www.instagram.com/niteshkumarnkzzzzz/profilecard/?igsh=MWRzcDhzMnUzM3F5bQ=='}><i className="fa-brands fa-square-instagram" id="in"></i></Link>
            <Link to={'https://www.linkedin.com/in/nitesh-kumar-904393259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><i className="fa-brands fa-linkedin"></i></Link>
        </div>
        <div className="c-name">&copy; FindCountry Private Limited</div>
        <div className="f-links">
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Company details</a>
        </div>
    </div>
</footer>
  )
}
