import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GameDevelopment from './pages/GameDevelopment';
import MachineLerning from './pages/MachineLerning';
import DevWeb from './pages/DevWeb';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MobileApps from './pages/MobileApps';
import DataScience from './pages/DataScience';
import BackendSystems from './pages/BackendSystems';
import Login from './pages/Login';
const router = createBrowserRouter([
  {
    path: "/page2",
    element: <App />,
  },
  {
    path: "/GameDevelopment",
    element: <GameDevelopment />,
  },
  {
    path: "/MachineLerning",
    element: <MachineLerning />,
  },
  {
    path: "/DevWeb",
    element: <DevWeb />,
  },
  {
    path: "/MobileApps",
    element: <MobileApps />,
  },
  {
    path: "/DataScience",
    element: <DataScience />,
  },
  {
    path: "/BackendSystems",
    element: <BackendSystems />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
