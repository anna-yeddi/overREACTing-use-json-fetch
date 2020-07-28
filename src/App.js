import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FetchedData from './components/FetchedData'
import FetchedError from './components/FetchedError'
import FetchedLoading from './components/FetchedLoading'

function App() {
  return (
    <div className="App">
      <h1>useJsonFetch is here</h1>
      <FetchedData />
      <FetchedError />
      <FetchedLoading />
    </div>
  )
}

export default App
