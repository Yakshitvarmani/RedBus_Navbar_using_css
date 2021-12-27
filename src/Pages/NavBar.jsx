import React from 'react'
import LeftMenu from './NavPages/LeftMenu'
import RightMenu from './NavPages/RightMenu'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className='container'>
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <LeftMenu/>
            <RightMenu/>
        </div>
        </div>
      </nav>
        </div>
    )
}

export default NavBar
