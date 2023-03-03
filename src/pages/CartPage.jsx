import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import config from '../utils/getConfing'
import { getCartThunk } from '../store/slices/cart.slice'

const CartPage = () => {
    
    const { cart } = useSelector(state => state)
    const dispatch = useDispatch()
    const [totalPrice, setTotalPrice] = useState(0)

    // console.log(cart);

    useEffect(() => {
        //acc = acumulador, cv = current value
        setTotalPrice(cart?.reduce((acc, cv)=> acc + cv.quantity * Number(cv.product.price),0))
    }, [ cart ])
    //cart porque viene de una petición async y debe esperar

    const handlePurchase = () =>{
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        axios.post(url, {} , config)
            .then(res => {
                console.log(res.data)
                //vacía el carrito de compras en el backend
                dispatch(getCartThunk())
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div>
            <div>
                {
                    cart?.map(productInfo => (
                        <CartItem
                        key={productInfo.id}
                        productInfo={productInfo}
                        />
                    ))
                }
            </div>
            <footer>
                <h2><span>Total: </span><span>{totalPrice}</span></h2>
                <button onClick={handlePurchase}>Buy this Cart</button>
            </footer>
        </div>
    )
}

export default CartPage