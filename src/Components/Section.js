import React from 'react';
import styled from "styled-components";

function Section({model, backgroundImg, description, leftBtn, rightBtn, isArrow}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{model}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>{leftBtn}</LeftButton>
                    {rightBtn && <RightButton>{rightBtn}</RightButton>
                    }

                </ButtonGroup>
                {isArrow && <DownArrow src="/images/down-arrow.svg"/>}

            </Buttons>

        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  //background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`};


`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;


`
const ButtonGroup = styled.div`
  display: flex;
  //flex-direction: column;
  margin-bottom: 30px;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
  }


`
const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
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
  font-weight: 600;
`
const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;

`
const DownArrow = styled.img`
  height: 40px;
  margin-top: 20px;
  animation: animateDown infinite 1.5s;
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }

`
const Buttons = styled.div`


`