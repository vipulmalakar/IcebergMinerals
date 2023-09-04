import React from "react";
import styled from "styled-components";
import BackgroundImage from "./assets/Mountains2.jpg";
import Navbar from "./components/Navbar";
import TopContainer from "./components/TopContainer";
import PlantSetup from "./components/PlantSetup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <StyledCover>
        <Navbar />
        <TopContainer />
        <PlantSetup />
        <Footer />
    </StyledCover>
  );
};

export default App;

const StyledCover = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    ${'' /* align-items: center;
    justify-content: center; */}
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    ${'' /* text-align: center; */}
    overflow-y: scroll;
    padding: 0rem 2rem;
    @media screen and (max-width: 500px) {
        padding: 0rem 1rem;
    }
`