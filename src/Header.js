import React from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';


/*
div 
    - 상하로 분리가 가능함
    - 한줄 전체를 영역으로 함

span
    - 줄 바꿈을 하지 않고 한줄로 표시
    - 안에 내용 만큼만 영역으로 차지

*/ 
function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

            <div className='header_search'>
            <input className='header_searchInput' type="text"/>
            <SearchIcon className='header_searchIcon'/>
          
            </div>
            <div className="header_nav">
                <div className='header_option'>
                    <span className='header_optionlineOne'>안녕하세요!</span>
                    <span className='header_optionlineTwo'>로그인하기</span>

                </div>

                <div className='header_option'>
                    <span className='header_optionlineOne'>돌아가기</span>
                    <span className='header_optionlineTwo'>주문내역</span>

                </div>

                <div className='header_option'>
                    <span className='header_optionlineOne'>반가워요</span>
                    <span className='header_optionlineTwo'>구독과 좋아요</span>

                </div>

            <div className="header_optionBasket">
              <ShoppingBasket/>
              <span className='heaer_optionlineTwoheaer_basket'>
                0
                    </span>  
            </div>







            </div>
        </div>
    );
}

export default Header;