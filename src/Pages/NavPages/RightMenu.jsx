import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const RightMenu = () => {
    let [state ,setState] = useState(false);
    let [nonState ,setNonState] = useState(false);
    let makeChange = ()=>{
        setState(!state)
    }
    let newChange = ()=>{
        setNonState(!nonState)
    }
    return (

        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Help <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={newChange} style={{position:'relative'}}>
                  
                  Manage Booking <i class="fas fa-caret-down"></i>
                  <ul id='dropdown1'style={nonState === false ? {display:'none'}:{display:'block'}}>
                    <div className='triangleBlock'>
                      <p className='triangle'></p>
                    </div>
                  <li><a href="">Bus Tickets</a></li>
                <li><a href="">Cancel</a></li>
                <li><a href="">Change Travel Date</a></li>
                <li><a href="">Show My Ticket</a></li>
                <li><a href="">Email/SMS</a></li>               
                  </ul>
                  </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={makeChange} style={{position:'relative'}}>
              <i class="far fa-user-circle fa-2x"></i> <i class="fas fa-caret-down"></i>
            <ul id='dropdown'style={state === false ? {display:'none'}:{display:'block'}}>
            <div className='triangleBlock'>
                      <p className='triangle'></p>
                    </div>
                <li><a href="">Signin</a></li>
                <li><a href="">SignUp</a></li>
            </ul>
            </Link>
            </li>
          </ul>
    )
}

export default RightMenu
