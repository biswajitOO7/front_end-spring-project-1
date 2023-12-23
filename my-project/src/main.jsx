import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AddUser from './components/AddUser.jsx'
import EditUser from './components/EditUser.jsx'
import Table from './components/Table.jsx'
import './index.css'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Table/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/edituser/:id' element={<EditUser/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
