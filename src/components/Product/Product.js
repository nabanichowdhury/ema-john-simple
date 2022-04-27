import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    const{img,name,price,seller,ratings}=props.product


    return (
        <div className='product'>
            <img  src={img} alt=""></img>
            {
                <div className='product-info'>
                    <h3 className='product-name'>{name}</h3>
                <p>Price:${price}</p>
                <p><small>{seller}</small>
                
                </p>
                <p><small>Ratings:{ratings}</small></p>
                <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                    Add to cart
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

                </div>
            }
            
        </div>
    );
};

export default Product;