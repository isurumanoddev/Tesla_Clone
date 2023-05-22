import React from 'react';
import Section from "./Section";
import styled from "styled-components";

function Home() {
    return (
        <Container>
            <Section
                model={"Model S"}
                description={"Order Online for Touchless Delivery"}
                backgroundImg="model-s.jpg"
                leftBtn={"CUSTOM ORDER"}
                rightBtn={"EXISTING INVENTORY"}
                isArrow={true}


            />
            <Section
                backgroundImg="model-y.jpg"
                description={"Order Online for Touchless Delivery"}
                model={"Model Y"}
                leftBtn={"CUSTOM ORDER"}
                rightBtn={"EXISTING INVENTORY"}
            />
            <Section
                backgroundImg="model-x.jpg"
                description={"Order Online for Touchless Delivery"}
                model={"Model X"}
                leftBtn={"CUSTOM ORDER"}
                rightBtn={"EXISTING INVENTORY"}
            />
            <Section
                backgroundImg="model-3.jpg"
                description={"Order Online for Touchless Delivery"}
                model={"Model 3"}
                leftBtn={"CUSTOM ORDER"}
                rightBtn={"EXISTING INVENTORY"}
            />
            <Section
                backgroundImg="solar-panel.jpg"
                description={"Money-back guarantee"}
                model={"Lowest Cost Solar Panels in America"}
                leftBtn={"ORDER NOW"}
                rightBtn={"LEARN MORE"}
            />
             <Section
                backgroundImg="solar-roof.jpg"
                description={"Solar Roof Costs Less Than a New Roof Plus Solar Panels"}
                model={"Solar for New Roofs"}
                leftBtn={"ORDER NOW"}
                rightBtn={"LEARN MORE"}
            />
            <Section
                backgroundImg="accessories.jpg"
                description={"Solar Roof Costs Less Than a New Roof Plus Solar Panels"}
                model={"Accessories"}
                leftBtn={"SHOP NOW"}

            />

        </Container>
    );
}

export default Home;

const Container = styled.div`
  height: 100vh;


`
