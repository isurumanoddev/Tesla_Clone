import React,{useEffect,useState} from 'react';
import styled from "styled-components";
import "./Header.css"


function Header() {
    const [sideBar,setSideBar] = useState(false)

    const [darkLink,setDarkLink] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if (window.scrollY > 800) {
                setDarkLink(true)
            }else setDarkLink(false)
        })




    },[])
    console.log(sideBar)

    const openSideBar = () => {
        setSideBar(true)
          console.log("clickesd")

    }
    const closeSideBar = () => {
        setSideBar(false)

    }

    return (
        <Container >
            <a href="#">
                <img className={"header__logo"} src="/images/logo.svg" alt={"logo"}/>
            </a>
            <Menu>
                <ul className={`header__list ${darkLink && "header__list__dark"}`}>
                    <li className="header__links"><a href="https://www.tesla.com/models">Model S</a></li>
                    <li className="header__links"><a href="#">Model 3</a></li>
                    <li className="header__links"><a href="#">Model X</a></li>
                    <li className="header__links"><a href="#">Model Y</a></li>
                </ul>
            </Menu>
            <RightMenu>
                <ul className={`header__list ${darkLink && "header__list__dark"}`}>
                    <li className="header__links"><a href="#">Shop</a></li>
                    <li className="header__links"><a href="#">Account </a></li>
                    <li className="header__links"><a href="#" onClick={() => openSideBar()}>Menu</a></li>


                </ul>
            </RightMenu>
           <BurgerNav show={sideBar} >

                    <img onClick={() => closeSideBar()}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png"/>
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Model Y</a></li>
                    <li><a href="#">Solar Roof</a></li>
                    <li><a href="#">Solar Panels</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Insuarance</a></li>
                    <li><a href="#">Fleet</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Carrers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">More</a></li>

            </BurgerNav>





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
  z-index: 100;
  top: 0;
 
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
const BurgerNav = styled.div`

  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.92);
  width: 300px;
  height: 100vh;
  display: flex;
  font-size: 0.9rem;
  text-align: start;
  overflow-y: hidden;
  flex-direction: column;
  padding: 20px;
  color: white;
  transition: transform 0.25s ease-in;
   transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};


  //padding-top: 1rem;


  font-weight: 500;

  li {

    //display: flex;
    //justify-content: flex-start;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    transition: 0.45s;

  }

  li:hover {
    color:#797575 ;

  }

  img {
    width: 30px;
    //padding: 1rem;
    position: absolute;
    right: 30px;
    top: 10px;
    cursor: pointer;
    transition: 0.4s;
  }

  img:hover {
    transform: scale(1.09);
  }

  @media (max-width: 676px) {
    img {

      right: 40px;

    }

    width: 180px;

  }


`
