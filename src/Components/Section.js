import React from 'react';
import styled from "styled-components";

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            <Buttons>
                       <ButtonGroup>
                <LeftButton>CUSTOM ORDER</LeftButton>
                <RightButton>EXISTING INVENTORY</RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>

        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  

`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;


`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;;
  margin-bottom: 30px;
  gap: 8px;


`
const LeftButton = styled.div`
background:rgba(23,26,32,0.8) ;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  border-radius: 100px;
  opacity: 0.85;
  cursor: pointer;
`
const RightButton = styled(LeftButton)`

`
const DownArrow = styled.img`
  height: 40px;
  margin-top: 20px;

`
const Buttons = styled.div`


`