import React from 'react';
import styled from 'styled-components';
import home_logo from "../img/home-icon.svg"; 
import watchlist_logo from "../img/search-icon.svg"; 
import search_logo from "../img/search-icon.svg"; 
import original_logo from "../img/watchlist-icon.svg"; 
import movie_logo from "../img/original-icon.svg"; 
import series_logo from "../img/movie-icon.svg"; 

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" alt=""/>
            <NavMenu>
                <a href="#">
                    <img src= {home_logo} alt=""/>
                    <span>HOME</span>
                </a>
                <a  href="#">
                    <img src={search_logo} alt=""/>
                    <span>SEARCH</span>
                </a>
                <a  href="#">
                    <img src={watchlist_logo} alt=""/>
                    <span>WATCHLIST</span>
                </a>
                <a  href="#">
                    <img src={original_logo} alt=""/>
                    <span>ORIGINALS</span>
                </a>
                <a  href="#">
                    <img src={movie_logo} alt=""/>
                    <span>MOVIES</span>
                </a>
                <a  href="#">
                    <img src={series_logo} alt=""/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UsrImg src="/images/id.jpg" alt=""/>

        </Nav>

    )
}

export default Header

const Nav = styled.nav`
height:70px;
background: #090b13;
display: flex;
align-items:center;
padding: 0 36px;
overflow-x:hidden;
`

const Logo = styled.img`
width:80px;

`
const NavMenu = styled.div`
display:flex;
flex: 1;
margin-left:25px;
align-items:center;
a {
    display: flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;

        &:after {
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity: 0;
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform:scaleX(0);
        }  
    }
    &:hover{
        span:after{
            opacity: 1;
            transform:scaleX(1);
        }
    }
}

`
const UsrImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;

`