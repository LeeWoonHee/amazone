import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateVlue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const  [{basket, user},dispatch]=useStateVlue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt=""/>
                <div>
                    <h2 className="checkout_title">{user?.email}장바구니입니다.</h2>
                </div>
                {basket.map(item=>(
                    <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                ))}

            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    );
}

export default Checkout;