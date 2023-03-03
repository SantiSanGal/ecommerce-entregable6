import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import config from '../../utils/getConfing'
import { getCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const ProductInfo = ({ product }) => {

  const [counter, setCounter] = useState(1)

  const dispatch = useDispatch()

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1)
    }
  }

  const handleAddCart = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

    const data = {
      quantity: counter,
      productId: product?.id
    }

    axios.post(url, data , config)
      .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
        setCounter(1)
      })
      .catch(err => console.log(err.response))
  }

  return (
    <article>
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <section>
          {/* un section debe tener un titulo obligatoriamente */}
          <h4>Price</h4>
          <span>{product?.price}</span>
        </section>
        <section>
          <h4>Quantity</h4>
          <div>
            <span onClick={handleMinus}>-</span>
            <span>{counter}</span>
            <span onClick={handleAdd}>+</span>
          </div>
          <button onClick={handleAddCart}>Add to cart <i className='bx bx-cart'></i></button>
        </section>
      </footer>
    </article>
  )
}

export default ProductInfo