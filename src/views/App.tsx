import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'

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
          <Route path={'hoge'} element={<div>hoge</div>} />
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
      // If you use daisyUI themes.
      // document.documentElement.dataset.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      // If you use daisyUI themes.
      // document.documentElement.dataset.theme = 'light'
    }
  }, [isInitialDarkMode])

  const handleDarkModeOn = () => {
    localStorage.setItem('darkMode', 'on')
    setIsDarkMode(true)
  }
  const handleDarkModeOff = () => {
    localStorage.setItem('darkMode', 'off')
    setIsDarkMode(false)
  }

  return (
    <div>
      {isDarkMode ? (
        <button
          onClick={handleDarkModeOff}
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          <SunIcon />
        </button>
      ) : (
        <button
          onClick={handleDarkModeOn}
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          <MoonIcon />
        </button>
      )}
    </div>
  )
}

export default App
