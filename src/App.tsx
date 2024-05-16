import React from 'react';
import './App.scss';
import {MainNavigator} from 'pages';
import { Header } from 'components';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <MainNavigator />
            </main>
        </div>
    );
}

export default App;
