import React from 'react'
import axios from 'axios'
import config from '../../utils/getConfing'
import { getCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CartItem = ({ productInfo }) => {

    const dispatch = useDispatch()

    const handleDelete = () =>{
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${productInfo.id}`
        
        axios.delete(url, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
                //para eliminar de la vista el producto eliminado en la bd
            })
            .catch(err => console.log(err.response))
    }

    return (
        <div>
            <header>
                <img src={productInfo.product.images[0].url} alt="" />
            </header>
            <div>
                <h4>{productInfo.product.brand}</h4>
                <h3>{productInfo.product.title}</h3>
                <ul>
                    <li>
                        <span>Unit Price</span>
                        <span>{productInfo.product.price}</span>
                    </li>
                    <li>
                        <span>Quantity</span>
                        <span>{productInfo.quantity}</span>
                    </li>
                </ul>
            </div>
            <button onClick={handleDelete}>
                <i className='bx bx-trash' ></i>
            </button>
        </div>
    )
}

export default CartItem