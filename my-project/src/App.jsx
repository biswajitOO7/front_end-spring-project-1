
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Table from './components/Table'

function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
