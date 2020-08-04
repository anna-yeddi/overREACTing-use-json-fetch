import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FetchedData from './components/FetchedData'

function App() {
  return (
    <div className="App">
      <h1>useJsonFetch is here</h1>
      <FetchedData url="data" />
      <FetchedData url="error" />
      <FetchedData url="loading" />
    </div>
  )
}

export default App
