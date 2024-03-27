import { useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
import Card from '../components/Card.jsx'
import data from './data.js'
import './App.css'

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <>
      <Sidebar />
      <Header />
      <Main />
      {cards}
    </>
  )
}
