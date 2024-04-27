import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Football from './pages/Football.jsx';
import Basketball from './pages/Basketball.jsx';
import Volleyball from './pages/Volleyball.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<Home/>}/>
      <Route path='/football' element={<Football/>}/>
      <Route path='/basketball' element={<Basketball/>}/>
      <Route path='/volleyball' element={<Volleyball/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
