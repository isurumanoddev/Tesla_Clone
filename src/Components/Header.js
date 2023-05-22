import React from 'react';
import styled from "styled-components";

function Header() {
    return (
        <Container>
            <a href="#">
                <img className={"header__logo"} src="/images/logo.svg" alt={"logo"}/>
            </a>
            <Menu>
                <ul className="header__list">
                    <li className="header__links"><a href="#">Model S</a></li>
                    <li className="header__links"><a href="#">Model S</a></li>
                    <li className="header__links"><a href="#">Model S</a></li>
                    <li className="header__links"><a href="#">Model S</a></li>
                </ul>
            </Menu>


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
  
  
`