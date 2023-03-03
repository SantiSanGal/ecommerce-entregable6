import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import config from '../utils/getConfing'
import PurchaseCard from '../components/PurchasesPage/PurchaseCard'

const PurchasesPage = () => {

    const [purchases, setPurchases] = useState()
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
        useEffect(() => {
            axios.get(url, config)
                .then(res => setPurchases(res.data))
                .catch(err => console.log(err.response))
        }, [])
    

    return (
        <div>
            <div>
                {
                    purchases?.map(purchase => (
                        <PurchaseCard 
                            key={purchase.id}
                            purchase={purchase}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PurchasesPage