import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo1 from './images/logo1.png'
import logo2 from './images/logo2.jpg'
import logo3 from './images/n.gif'

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="brand-title">
          <Link to="/">
            <img
              height={'60px'}
              width={'125px'}
              src={logo1}
              style={{ paddingRight: '10px' }}
            />
          </Link>

          <img height={'60px'} width={'125px'} src={logo2} />
        </div>
        <Link
          className="toggle-button"
          onClick={() => {
            setSidebar(!sidebar)
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Link>

        <div className={sidebar ? 'navbar-links active' : 'navbar-links'}>
          <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/Schemes">Schemes</CustomLink>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/Contact">Contact</CustomLink>
          </ul>
        </div>
      </nav>

      <marquee className="marque">
        <p> Some news information </p>
        
      </marquee>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
