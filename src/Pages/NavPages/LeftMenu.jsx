import React from 'react'
import { Link } from 'react-router-dom'
const LeftMenu = () => {
    return (
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link to='/busTickets' className='nav-link'>
                    Bus Ticket
                </Link>
                </li>
            <li className='nav-item'>
                <Link to='/' className='nav-link'>
                    rPool<sup>New</sup>                    
                </Link>
                </li>
            <li className='nav-item'>
                <Link to='/busTickets' className='nav-link'>
                    Bus Hire
                </Link>
                </li>
            <li className='nav-item'>
                <Link to='/busTickets' className='nav-link'>
                    redRail
                </Link>
                </li>
        </ul>
    )
}

export default LeftMenu
