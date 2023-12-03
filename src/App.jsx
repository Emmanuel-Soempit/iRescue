import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Registration from './pages/registration/Registration'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './utils/ProtectedRoute'
import ErrorBoundary from './utils/ErrorBoundary'


function App() {

  return (
    <AuthContextProvider>
    <ErrorBoundary>
    <Router>
    <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<ProtectedRoute/>}>
        <Route path="/dashboard/:id" element={<Dashboard/>} />    
        </Route>
    </Routes>
    </Router>
    </ErrorBoundary>
    </AuthContextProvider>
   
   
  )
}

export default App
