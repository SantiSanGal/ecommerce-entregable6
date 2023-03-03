import React from 'react'

const PurchaseCard = ({ purchase }) => {
    return (
        <article>
            <header>
                <img src={purchase.product.images[0].url} alt="" />
            </header>
            <h3>{purchase.product.title}</h3>
            <div>{purchase.quantity}</div>
            <div>{purchase.product.price}</div>
        </article>
    )
}

export default PurchaseCard