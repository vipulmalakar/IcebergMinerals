import React from "react";
import styled from "styled-components";
import BottlesImage from "../assets/Bottles.png";

const TopContainer = () => {
    return(
        <StyledContainer>
            <StyledAboutContainer>
                <StyledHeading>About Us</StyledHeading>
                <StyledText>At Ice Berg Minerals, we are committed to providing you  with premium quality water bottles that not only keep you  hydrated but also minimize your  environmental impact. Our  mission is to offer a sustainable  alternative to single-use plastic  bottles while delivering  exceptional functionality  and design.</StyledText>
            </StyledAboutContainer>
            <StyledImage src={BottlesImage} alt="Bottles" />
        </StyledContainer>
    );
};

export default TopContainer;

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    @media screen and (max-width: 1024px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;
const StyledAboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;
const StyledHeading = styled.h1`
    color: #fff;
    font-weight: 600;
    font-size: 4rem;
    @media screen and (max-width: 500px) {
        font-size: 3rem;
        text-align: center;
    }
`
const StyledText = styled.p`
    color: #fff;
    font-size: 1.8rem;
    line-height: 1.8;
    @media screen and (max-width: 1024px) {
        line-height: 1.5;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 500px) {
        text-align: center;
    }
`
const StyledImage = styled.img`
    width: 20rem;
    @media screen and (max-width: 1024px) {
        width: 15rem;
    }
`