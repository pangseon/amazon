import React, { useState } from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';


/*
div 
    - 상하로 분리가 가능함
    - 한줄 전체를 영역으로 함

span
    - 줄 바꿈을 하지 않고 한줄로 표시
    - 안에 내용 만큼만 영역으로 차지

*/ 
function Header() {
   
    
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
        
    }



    return (
        <div className='header'>
            <Link to='/'>
            <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </Link>
            
            <div className='header_search'>

            <input className='header_searchInput' type="text"/>
            
            <SearchIcon className='header_searchIcon'/>
          
            </div>
            <div className="header_nav">
                <div className='header_option'>
                    <span className='header_optionlineOne'>안녕하세요!</span>
                    <Link to={!user && '/login'} className='homelogin'>
                    <span onClick={handleAuthentication} className='header_optionlineTwo'>{user ? '로그아웃' : '로그인'}</span>
                    </Link>
                </div>

                <div className='header_option'>
                    <span className='header_optionlineOne'>돌아가기</span>
                    <span className='header_optionlineTwo'>주문내역</span>

                </div>

<Link to ='/checkout'>
            <div className="header_optionBasket">
              <ShoppingBasket/>
              <span className='heaer_optionlineTwoheaer_basket'>
                {basket?.length}        
        
                    </span>  
            </div>
</Link>






            </div>
        </div>
    );
}

export default Header;