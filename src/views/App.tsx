import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'

import DaisyUi from '~/views/pages/DaisyUi'
import OverView from '~/views/pages/OverView'

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Navigate to={'ui'} />} />
        <Route path="ui" element={<AppLayout />}>
          <Route index element={<OverView />} />
          <Route path={'daisy-ui'} element={<DaisyUi />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

function AppLayout() {
  return (
    <div>
      <ToggleDarkMode />
      <Outlet />
    </div>
  )
}

function ToggleDarkMode() {
  const isInitialDarkMode =
    localStorage.getItem('darkMode') === 'on' ||
    (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

  const [isDarkMode, setIsDarkMode] = useState(isInitialDarkMode)

  useEffect(() => {
    if (isInitialDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.dataset.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.dataset.theme = 'light'
    }
  }, [isInitialDarkMode])

  const handleDarkModeOn = () => {
    document.documentElement.classList.add('dark')
    document.documentElement.dataset.theme = 'dark'
    localStorage.setItem('darkMode', 'on')
    setIsDarkMode(true)
  }
  const handleDarkModeOff = () => {
    document.documentElement.classList.remove('dark')
    document.documentElement.dataset.theme = 'light'
    localStorage.setItem('darkMode', 'off')
    setIsDarkMode(false)
  }

  return (
    <div>
      {isDarkMode ? (
        <button onClick={handleDarkModeOff} className="btn btn-circle">
          <SunIcon />
        </button>
      ) : (
        <button onClick={handleDarkModeOn} className="btn btn-circle">
          <MoonIcon />
        </button>
      )}
    </div>
  )
}

export default App
