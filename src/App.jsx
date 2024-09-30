import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/Wishlist' element={<Wishlist/>}></Route>
      {/* ':' it indicate path parameter of url, path parameter will stored in the variable id */}
      <Route path='/:id/view' element={<View/>}></Route>
      <Route path='/*' element={<Pnf/>}></Route>


    </Routes>
    <Footer/>
    </>
  )
}

export default App
