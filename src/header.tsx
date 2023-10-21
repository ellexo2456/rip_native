import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import AlpinistsPage from './AlpinistsPage/AlpinistsPage'
import AlpinistPage from './AlpinistPage/alpinistPage'

const App: React.FC = () => {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Breadcrumbs/>
                </Navbar.Collapse>
            </Navbar>

            <Routes>
                <Route path="/" element={<AlpinistsPage/>} />
                <Route path="/alpinist/:id" element={<AlpinistPage/>} />
            </Routes>
        </Router>
    );
};

export default App;
