import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from './Reducer';
import { useStateVlue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
    const [{basket},dispatch]=useStateVlue();
    const navigate = useNavigate('/payment');
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    총액({basket?.length} items) : <strong>{value}원</strong>
                </p>
                <small className="subtotla_gift">
                    <input type="checkbox"/>결제하시겠습니까?
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"￦"}
            />
            <button onClick={e=>navigate('/payment')}>결제하기</button>
        </div>
    );
}

export default Subtotal;