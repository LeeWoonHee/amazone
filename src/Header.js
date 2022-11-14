
import { ShoppingBasket } from '@mui/icons-material';
import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { useStateVlue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{basket, user}]=useStateVlue();
    
    const handleAhthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <button>검색</button>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">{user ? (user.email) : '게스트'}</span>
                    <Link to={!user && '/login'} className="homelogin">
                    <span onClick={handleAhthentication} className="header_optionLineTwo">{user ? '로그아웃' : '로그인'}</span>
                    </Link>
                </div>
                <div className="header_optionBasket">
                    <Link to="/checkout"><ShoppingBasket/>
                    <span className="header_optionLineTwoheader_basketCount">{basket?.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;