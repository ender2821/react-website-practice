import React from 'react';

class Home extends React.Component {
    state = {
        phone: '123-456-7890',
    };
    render() {
        return(
            <div className="home-section">
            	Home Page
            </div>   
        );
    }
}

export default Home;