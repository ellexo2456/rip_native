import React from 'react'
import ReactDOM from 'react-dom/client'
import AlpinistsPage from './AlpinistsPage/AlpinistsPage'
import AlpinistPage from './AlpinistPage/alpinistPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './header';
import {createBrowserRouter, RouterProvider, Link, useLocation} from 'react-router-dom';
import App from "./header";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <AlpinistsPage/>
//     },
//     {
//         path: '/alpinist/:id',
//         element: <AlpinistPage/>
//     }
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App></App>
        {/*<RouterProvider router={router}/>*/}
    </React.StrictMode>,
)