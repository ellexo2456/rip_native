import React from 'react'
import ReactDOM from 'react-dom/client'
import IAlpinistsPage from './AlpinistsPage/AlpinistsPage'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>Это наша стартовая страница</h1>
//   },
//   {
//     path: '/new',
//     element: <h1>Это наша страница с чем-то новеньким</h1>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IAlpinistsPage/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)