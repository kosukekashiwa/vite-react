import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'

import OverView from '~/views/pages/OverView'

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  )
}

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Navigate to={'ui'} />} />
        <Route path="ui" element={<AppLayout />}>
          <Route index element={<OverView />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

const AppLayout: React.FC = () => {
  return <Outlet />
}

export default App
