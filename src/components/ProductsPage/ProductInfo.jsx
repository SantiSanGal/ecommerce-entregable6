import React from 'react'
import { useState } from 'react'

const ProductInfo = ({ product }) => {

  const [counter, setCounter] = useState(1)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleMinus = () => {
    if(counter - 1 >=1 ){
      setCounter(counter - 1)
    }
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
          <button>Add to cart <i className='bx bx-cart'></i></button>
        </section>
      </footer>
    </article>
  )
}

export default ProductInfo