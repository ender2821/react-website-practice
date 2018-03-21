import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render() {
        return(
            <ul className='nav-links'>
                <li>Products</li>
                <li>Services</li>
                <li><Link to='/about'>About</Link></li>
                <li>Contact</li>
            </ul>
        );
    }
}

export default Nav;