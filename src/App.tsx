import React from 'react';
import './App.scss';
import {MainNavigator} from 'pages';
import {Footer, Header} from 'components';

const App = () => {
    return (
        <div className="App">
            <Header />

            <MainNavigator />

            <Footer />
        </div>
    );
}

export default App;
