import React from 'react'
import ReactDOM from 'react-dom'
import ApiFetch from './Components/ApiFetch'
import ActionApiFetch from './Components/GenreApiFetch/ActionApiFetch'
import HorrorApiFetch from './Components/GenreApiFetch/HorrorApiFetch'
import MusicApiFetch from './Components/GenreApiFetch/MusicApiFetch'
import ThrillerApiFetch from './Components/GenreApiFetch/ThrillerApiFetch'
import Api from './Components/Filter/Api'
import ApiTab from './Components/Filter/ApiTab'

import './App.css'

function App() {
  return (

    <>
  
    <Api/>
    <ApiTab/>
    <ApiFetch/>
    <ActionApiFetch/>
    <HorrorApiFetch/>
    <MusicApiFetch/>
    <ThrillerApiFetch/>
    </>
  )
}

export default App

