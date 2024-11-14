import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()

const myWishlist = useSelector(state=>state.wishlistReducer)
const myCart = useSelector(state=>state.cartReducer)



  return (
    <nav className='flex w-full bg-blue-600 fixed top-0 p-3 items-center'>
    <Link className='text-white font-semibold' to={'/'}><i class="fa-solid fa-truck-fast me-1"></i>E Cart</Link>
    <ul className='flex-1 text-right'>
   { insideHome && <li className='list-none inline-block px-5'><input  onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'300px'}} className='rounded p-1' type="text" placeholder='search products here!' /></li>}
    
          <li className='list-none inline-block px-5'> <Link to={'/wishlist'} className='text-white font-semibold px-2'> <i class="fa-solid fa-heart text-red-600 me-1"></i>Wishlist <span className='bg-black rounded p-1'>{myWishlist.length}</span></Link></li>


      <li className='list-none inline-block px-5'> <Link to={'/cart'} className='text-white font-semibold px-2'> <i class="fa-solid fa-cart-plus text-green-600 me-1"></i>Cart <span className='bg-black rounded p-1'>{myCart.length}</span></Link></li>
    </ul>

    </nav>
  )
}

export default Header











