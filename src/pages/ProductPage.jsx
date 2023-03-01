import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductInfo from '../components/ProductsPage/ProductInfo'
import SimilarProducts from '../components/ProductsPage/SimilarProducts'

const ProductPage = () => {

  const { id } = useParams()

  const [product, setProduct] = useState()

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    axios.get(url)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [id])

  // console.log(product);

  return (
    <div>
      {/* <h1>{id}</h1> */}
      <ProductInfo
        product={product}
      />
      <SimilarProducts
        category={product?.category}
        productId={product?.id}
      />
    </div>
  )
}

export default ProductPage