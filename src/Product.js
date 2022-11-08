import React from 'react';
import "./Product.css";

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p><i class="fa fa-star" aria-hidden="true"></i></p>
                        ))}
                </div>
            </div>
            <img src={image} className="product__image" alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
