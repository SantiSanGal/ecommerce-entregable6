import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import { getAllProductsThunk, getProductsByName } from '../store/slices/products.slice';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const dispatch = useDispatch()


    const { products } = useSelector(state => state)
    const [categorys, setCategorys] = useState()
    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })


    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        axios.get(url)
            .then(res => setCategorys(res.data))
            .catch(err => console.log(err.response))
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        const input = e.target.inpuSearch.value.trim().toLowerCase()
        dispatch(getProductsByName(input))
    }

    const handleClickCategory = (id) => {
        dispatch(getProductsByName(id, true))
    }

    const handleSubmitPrice = e => {
        e.preventDefault()
        const from = e.target.from.value.trim()
        const to = e.target.to.value.trim()

        if (from && to) {
            setFromTo({ from, to })
        } else if (from && !to) {
            setFromTo({ from, to: Infinity })
        } else if (!from && to) {
            setFromTo({ from: 0, to })
        }else{
            setFromTo({from: 0, to: Infinity})
        }
    }

    const filterProduct = product => +product.price >= fromTo.from && +product.price <= fromTo.to

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id='inpuSearch' type="text" />
                <button><i className='bx bx-search'></i></button>
            </form>

            <div>
                <header>
                    <h3>Price <i className='bx bx-chevron-down'></i></h3>
                </header>
                <form onSubmit={handleSubmitPrice}>
                    <div>
                        <label htmlFor="from">From</label>
                        <input type="text" id='from' />
                    </div>
                    <div>
                        <label htmlFor="to">To</label>
                        <input type="text" id='to' />
                    </div>
                    {/* //shift + alt + flecha abajo, copia lo seleccionado */}
                    <button>Filter Price</button>
                </form>
            </div>

            <div>
                <header>
                    <h3>Category</h3>
                    <i className='bx bx-chevron-down'></i>
                </header>
                <ul>
                    <li onClick={() => dispatch(getAllProductsThunk())}>All Products</li>
                    {
                        categorys?.map(category => (
                            <li key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                {
                    products?.length === 0 || products === null ?
                        <h1>💥💢This Product does'nt exists💢💥</h1>
                        :
                        products?.filter(filterProduct).map(product => (
                            <CardProduct
                                key={product.id}
                                product={product}
                            />
                        ))
                }
            </div>
        </div>
    )
}

export default Home