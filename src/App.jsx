import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Registration from './pages/registration/Registration'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'



function App() {

  return (
    <Router>
    <Routes>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </Router>
   
  )
}

export default App
