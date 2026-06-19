import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart'
import WatchDetails from './pages/WatchDetails'
import Wear from './components/Wear'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element= { <Home />}/>
      <Route path="/wear" element={<Wear />} />
      <Route path='/login' element= { <Login />}/>
      <Route path='/register' element= { <SignUp />}/>
      <Route path='/cart' element= { <Cart />}/>
      <Route path='/details' element= { <WatchDetails />}/>
      
    </Routes>
    </>
  )
}

export default App