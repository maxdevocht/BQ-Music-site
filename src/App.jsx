import { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Main />
    </>
  )
}
