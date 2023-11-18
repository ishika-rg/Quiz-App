import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className = 'nav'>
        <div className = 'logo'>
            QuizzBuzz
        </div>
        <div className = 'profile'>
            <div className = 'user'>{props.user}  </div>
            <div className = 'user_name'>{props.user_name}  </div>


            {/* {props.user_name} */}

        </div>

    </div>
  )
}

export default Navbar