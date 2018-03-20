import React from 'react';
import Header from './Header';

class App extends React.Component {
    state = {
        phone: '123-456-7890',
    };
    render() {
        return(
            <div className="app-start">
            	<Header phone={this.state.phone}/>
            </div>   
        );
    }
}

export default App;