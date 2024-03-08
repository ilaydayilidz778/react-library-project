import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
