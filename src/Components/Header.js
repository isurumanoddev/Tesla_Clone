import React,{useEffect,useState} from 'react';
import styled from "styled-components";
import "./Header.css"


function Header() {

    const [darkLink,setDarkLink] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if (window.scrollY > 800) {
                setDarkLink(true)
            }else setDarkLink(false)
        })




    },[])


    return (
        <Container>
            <a href="#">
                <img className={"header__logo"} src="/images/logo.svg" alt={"logo"}/>
            </a>
            <Menu>
                <ul className={`header__list ${darkLink && "header__list__dark"}`}>
                    <li className="header__links"><a href="#">Model S</a></li>
                    <li className="header__links"><a href="#">Model 3</a></li>
                    <li className="header__links"><a href="#">Model X</a></li>
                    <li className="header__links"><a href="#">Model Y</a></li>
                </ul>
            </Menu>
            <RightMenu>
                <ul className={`header__list ${darkLink && "header__list__dark"}`}>
                    <li className="header__links"><a href="#">Shop</a></li>
                    <li className="header__links"><a href="#">Account </a></li>
                    <li className="header__links"><a href="#">Menu</a>
                        </li>


                </ul>
            </RightMenu>


        </Container>
    );
}

export default Header;


const Container = styled.div`
  position: fixed;

  min-height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`
const Menu = styled.div`
  @media (max-width: 676px) {
    display: none;
  }

`
const RightMenu = styled.div`
  img {
    width: 20px;
  }

`
