import React from 'react';

class Nav extends React.Component{
    render() {
        return(
            <ul className='nav-links'>
                <li>Products</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        );
    }
}

export default Nav;