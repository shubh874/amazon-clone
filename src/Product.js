import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';


function Product({id,title,rating,image,price}) {
    const [{basket,user},dispatch] = useStateValue();

    const addToBasket=()=>{
        dispatch({
        type : 'ADD_TO_BASKET',
        item : {
            id:id,
            title:title,
            rating:rating,
            image : image,
            price:price
        },       
        });
       
    };
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <span>⭐</span>
                        ))
                    }
                </div>
            </div>
            
            <img className='product__image' src={image} alt='' />
            <button className='product__btn' onClick={addToBasket}>Add to Cart</button>     
        </div>
    )
}

export default Product
