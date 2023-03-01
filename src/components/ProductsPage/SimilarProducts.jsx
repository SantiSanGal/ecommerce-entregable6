import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import CardProduct from '../Home/CardProduct'
import { useEffect } from 'react'

const SimilarProducts = ({ category, productId }) => {

    const [filterProducts, setFilterProducts] = useState()
    const { products } = useSelector(state => state)


    useEffect(() => {
        if (products && category) {
            setFilterProducts(products?.filter(product => product.category.id === category.id && product.id != productId))
            // a partir del &&, es la 2da forma en la que se peude hacer el filter
        }
    }, [category, products])

    return (
        <div>
            <h2>Discover Similar Products</h2>
            <div>
                {
                    // filterProducts?.map(prod => {
                    //     if (prod.id !== productId) {
                    //         return <CardProduct
                    //             key={prod.id}
                    //             //mismo nombre de la prop que recibe en la home
                    //             product={prod}
                    //         />
                    //     }
                    // })

                    filterProducts?.map(prod => (
                        <CardProduct
                            key={prod.id}
                            product={prod}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SimilarProducts