import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import NavbarStyle from "../styles/navbar.module.css";
import FeatureStyle from '../styles/features.module.css'

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  useGSAP(() => {
    const t = gsap.timeline()
    t.from(`.${NavbarStyle.logo} img, .${NavbarStyle.logo} h1, .${NavbarStyle.nav_part} h2`, {
      y: -50,
      opacity: 0,
      delay: 1,
      stagger: 0.3
    })
    gsap.to(`.${NavbarStyle.navbar}`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${FeatureStyle.page4}`,
        start: 'top -600',
        end: 'top -700px',
        scrub: 2
      }
    })
  })

  return (
    <nav className={NavbarStyle.navbar}>
      <div className={NavbarStyle.navbar_content}>
        <div className={NavbarStyle.logo}>
          <img src="/logo.png" alt="Logo" />
          <h1>JARVIS</h1>
        </div>
        <div className={`${NavbarStyle.nav_part} ${isNavOpen ? NavbarStyle.active : ''}`}>
          <h2>Mission</h2>
          <h2>Features</h2>
          <h2>Download</h2>
          <h2>Connect</h2>
          <button className={NavbarStyle.signin_button}>Sign In</button>
        </div>
        <div className={`${NavbarStyle.hamburger} ${isNavOpen ? NavbarStyle.active : ''}`} onClick={toggleNav}>
          <span className={NavbarStyle.bar}></span>
          <span className={NavbarStyle.bar}></span>
          <span className={NavbarStyle.bar}></span>
        </div>
      </div>
    </nav>
  )
}

export default Nav
