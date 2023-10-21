import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AlpinistsPage from './AlpinistsPage/AlpinistsPage'
import AlpinistPage from './AlpinistPage/alpinistPage'
import Header from "./Header.tsx";
const App: React.FC = () => {
    return (
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/" element={<AlpinistsPage/>}/>
                <Route path="/alpinist/:id" element={<AlpinistPage/>}/>
            </Routes>
        </Router>

    );
};

export default App;
