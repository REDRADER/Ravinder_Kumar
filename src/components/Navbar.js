import React from 'react'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <header className="nav--header">
        <nav>
          <div className="nav--logo">
            <a href="" >
              <img src={logo} alt="" className='logo--img' />
            </a>
          </div>
          <div className="nav--menu">
            <ul className="nav--items">
              <a href="#about" className="nav--links">
                <li>About</li>
              </a>
              <a href="#project" className="nav--links">
                <li>Projects</li>
              </a>
              <a href="#contact" className="nav--links">
                <li>Contact</li>
              </a>
            </ul>
            <div className="nav--btn">
              <a href="resume.pdf">Resume</a>
            </div>
          </div>
        </nav>
       
      </header>
  )
}

export default Navbar