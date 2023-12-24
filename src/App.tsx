import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlpinistsPage from './AlpinistsPage/AlpinistsPage'
import AlpinistPage from './AlpinistPage/alpinistPage'
import Header from "./Header.tsx";
import Breadcrumbs from "./Breadcrumbs.tsx";

import { LoginPage } from './AuthorizationPage/LoginPage.tsx';
import { RegisterPage } from './AuthorizationPage/RegisterPage.tsx';
import { MissionPage } from './MissionsPage/MissionPage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { HistoryPage } from './HistoryPage/HistoryPage.tsx';
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header></Header>
                <Breadcrumbs/>
                <Routes>
                    <Route path="/rip_front" element={<AlpinistsPage />} />
                    <Route path="/rip_front/alpinist/:id" element={<AlpinistPage />} />
                    <Route path="/rip_front/login" element={<LoginPage />} />
                    <Route path="/rip_front/register" element={<RegisterPage />} />
                    <Route path="/rip_front/missions" element={<MissionPage />} />
                    <Route path="/rip_front/history" element={<HistoryPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
