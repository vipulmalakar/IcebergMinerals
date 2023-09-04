import React from "react";
import styled from "styled-components";

const Footer = () => {
    return(
        <StyledContainer>
            <div className="d-flex flex-column align-items-center">
                <StyledHeading>Contact Us</StyledHeading>
                <StyledText>+ 91 8818800208</StyledText>
            </div>
            <StyledFooterText>All rights reserved. Ice Berg Minerals © 2023.</StyledFooterText>
        </StyledContainer>
    );
};

export default Footer;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const StyledText = styled.p`
    color: #fff;
    font-size: 1.3rem;
    text-align: center;
    @media screen and (max-width: 500px) {
        ${'' /* font-size: 0.8rem; */}
    }
`;
const StyledHeading = styled.h1`
    color: #fff;
    font-weight: 600;
    font-size: 2rem;
`;
const StyledFooterText = styled.p`
    color: #fff;
    font-size: 1.3rem;
    text-align: center;
    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`;