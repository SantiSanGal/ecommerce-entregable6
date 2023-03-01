import React, { useSyncExternalStore } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem'

const CartPage = () => {
    
    const { cart } = useSelector(state => state)

    // console.log(cart);

    return (
        <div>
            <div>
                {
                    cart?.map(productInfo => (
                        <CartItem key={productInfo.id}
                        productInfo={productInfo}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CartPage