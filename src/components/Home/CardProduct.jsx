import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import config from '../../utils/getConfing'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'


const CardProduct = ({ product }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

        const data = {
            quantity: 1,
            productId: product.id
        }

        axios.post(url, data, config)
            .then(res => {
                console.log(res.data)
                dispatch(getCartThunk())
            })
            .catch(err => {
                console.log(err.response)

                if (err.response.data.error == 'Product already added to cart') {

                }
                
            })
        e.stopPropagation()
    }

    return (
        <article onClick={handleClick}>
            <header>
                <img src={product.images[0].url} alt="" />
            </header>
            <section>
                <header>
                    <h3>{product.brand}</h3>
                    <h2>{product.tittle}</h2>
                </header>
                <div>
                    <span>Price</span>
                    <div className='price'>{product.price}</div>
                </div>
                <button onClick={handleBtnClick}>
                    <i className='bx bx-cart'></i>
                </button>
            </section>

            {/* esto es a prueba de bots, mirar la clase email */}
            <p className='email'>santiago.patiasoc</p>
            {/*  */}

        </article>
    )
}

export default CardProduct