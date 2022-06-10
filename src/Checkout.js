import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal.js';

function Checkout() {
    return (
        <div className='checkout'>
           <div className='checkout_left'>
            <img className='checkout_ad' src='' alt='/'/>
            <div>
                <h2 className='checkout_title'>
                    장바구니입니다
                </h2>
            </div>


            </div>
            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div>



    );
}
export default Checkout;
