import { RouterProvider } from 'react-router-dom'
import './App.css'
import RouterConfig from './router/Router'
import { AuthProvider } from './context/AuthContext'

function App() {


  return (
    <AuthProvider>
     <RouterProvider router={RouterConfig} />
    </AuthProvider>
  )
}

export default App
