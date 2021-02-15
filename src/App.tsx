import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages'

function App () {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Route path='/' component={Home} />
      </BrowserRouter>
    </div>
  )
}

export default App
