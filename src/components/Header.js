import React from 'react';
import Nav from './Nav';
class Header extends React.Component{
    render() {
        console.log(this.props.phone);
        return(
            <nav className="container">
                <div className="logo">

                </div>
                <Nav/>
                <div className='phone-number'>
                    <p>{this.props.phone}</p>
                </div>
            </nav>
        );
    }
}

export default Header;