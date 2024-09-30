import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const View = () => {

  const myCart = useSelector(state=>state.cartReducer)
  const myWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()
const [product, setProduct] = useState({})
const {id} = useParams()
  // console.log(id);



  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item => item.id == id))

    }
  }, [])
  // console.log(product);

  const handleWishlist = (product)=>{
    const exstingProduct = myWishlist?.find(item=>item.id==product.id)


    if(myWishlist.includes(product)){
      alert("product already in your wishlist!!!")
    }else{

      dispatch(addToWishlist(product))
    }
// if(myWishlist?.includes(product)){
//   alert("Product already in your wishlist!!!")

// }else{
//   dispatch(addToWishlist(product))
// }


const handleAddToCart = (product)

  }


  const handleAddToCart = (product)=>{
    const exstingProduct = myCart?.find(item=>item.id==product.id)
    if(exstingProduct){
      dispatch(addToCart(product))
      alert("product quantity is incrementing!!!")

    }else{
      dispatch(addToCart(product))
    }

  }


  return (
    <>
      <Header />
      <div style={{ minHeight: '90vh' }} className='flex justify-center items-center mt-5'>
        <div className="grid grid-cols-2 items-center">
          <img style={{ width: '100%', height: '400px' }} src={product?.thumbnail} alt="" />
          <div>
            <h3>PID: 1 {product?.id}</h3>
            <h1 className='text'>{product?.title}</h1>
            <h4 className='font-bold text-red-600 text-x1'>$ 10</h4>
            <p><span className='font-bold'>Description:</span>{product?.description}</p>
            <div className='flex justify-between m-5'>
              <button onClick={()=>handleWishlist(product)} className='bg-blue-600 text-white p-2 rounded'>ADD TO WHISHLIST</button>
              <button onClick={()=>handleAddToCart(product)} className='bg-green-600 text-white p-2 rounded'>ADD TO CART</button>

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default View