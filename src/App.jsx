import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import appRoutes from './routes/routes'
import NavComponent from './components/layout/NavComponent'

function App() {

  return (
    <>
      <Routes>
        <Route element={<NavComponent />}>
          <Route path={appRoutes.home.route} element={appRoutes.home.component} />
          {/* loop throug routes object */}
          {
            Object.entries(appRoutes)
              .map(([k, route], i) => (
                <Route key={route.route + i} path={`${route.route}/*`} element={route.component} />
              ))
          }
        </Route>
      </Routes>
    </>
  )
}

export default App
