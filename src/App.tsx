import React from 'react'
import NavBar from 'common/components/NavBar'
import HomePage from 'pages/Dashboard/HomePage'
import { CssBaseline } from '@mui/material'

function App() {
  return (
    <>
    <CssBaseline />
      <NavBar />
      <HomePage />
      <h1>Hello World</h1>
    </>
  )
}

export default App
