import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        // add

        addToCart:(state,actionFromView)=>{
            const existingProduct = state.find(item=>item.id==actionFromView.payload)
            if(existingProduct){

                const remaingProducts = state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
                state = [...remaingProducts,existingProduct]

            }else{
                state.push({...actionFromView.payload,quantity:1,totalPrice:actionFromView.payload.price})
            }
        },
        // remove single item

        removeCartItem:(state,actionFromCart)=>{
            return state.filter(item=>item.id!=actionFromCart.payload)

        },

        // increment quantity

        incQuantity:(state,actionFromCart)=>{
const existingProduct = state?.find(item=>item.id==actionFromCart.payload)
existingProduct.quantity++
existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
const remaingProducts = state.filter(item=>item.id!=existingProduct.id)
state = [...remaingProducts,existingProduct]
        },
        // decrement quantity

        decQuantity:(state,actionFromCart)=>{
    const existingProduct = state?.find(item=>item.id==actionFromCart.payload)
    existingProduct.quantity--
    existingProduct.totalPrice = existingProduct.quantity*existingProduct.price
    const remaingProducts = state.filter(item=>item.id!=existingProduct.id)
    state = [...remaingProducts,existingProduct]
},



        // empty cart
        emptyCart:(state)=>{
            return state =[]
        }

    }
})



export const {incQuantity} = cartSlice.actions
export const {decQuantity} = cartSlice.actions
export const {removeCartItem} = cartSlice.actions
export const {addToCart} = cartSlice.actions
export const {emptyCart} = cartSlice.actions
export default cartSlice.reducer

