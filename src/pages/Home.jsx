import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct';
import { getProductsByName } from '../store/slices/products.slice';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {

    const dispatch = useDispatch()


    const { products } = useSelector(state => state)
    const [categorys, setCategorys] = useState()

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id='inpuSearch' type="text" />
                <button><i className='bx bx-search'></i></button>
            </form>

            <div>
                <header>
                    <h3>Category</h3>
                    <i className='bx bx-chevron-down'></i>
                </header>
                <ul>
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
                        products?.map(product => (
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