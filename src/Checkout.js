import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img 
                    className='checkout__image'
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=''
                    />
                {basket?.length === 0 ?(
                    <div className='checkout__title'>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items just click on
                        "Add to basket" button next to the item.

                    </p>
                    </div>
                ):(
                    <div className='checkout__title'>
                        <h2>Your Shopping Basket</h2>
                    </div>
                )}
                {basket?.map(item=>(
                    <CheckoutProduct
                        id = {item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                
                    />
                ))
            }
            </div>
            {basket.length>0 && (
                <div className='checkout_right'>
                    <Subtotal />
                </div>
            )}
                                 
        </div>
    )
}

export default Checkout
