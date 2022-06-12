import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [{basket,dispatch}]=useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={value=>(
                <>
                <p>

                총액 ({basket.length} items):<strong> {value} 원</strong>



                </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' /> 체크박스입니다 




                    </small>
                
                 
                </>



            )}


            decimalScale={2} // 소수점 자리
            value={getBasketTotal(basket)}  // 값 지정 
            displayType={'text'} // 글자의 형태
            thousandSeparator={true} // 천의자리
            prefix={"|"} // 


            />

            <button>결제하기</button>

        </div>
    );
}

export default Subtotal; 