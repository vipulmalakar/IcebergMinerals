import React from "react";
import styled from "styled-components";
import ROPlant from "../assets/ROPlant.jpg";
import BlowingMachine from "../assets/BlowingMachine.jpg";
import PackagingMachine from "../assets/PackagingMachine.jpg";

const PlantSetup = () => {
    return(
        <StyledMainContainer>
            <StyledHeading>Plant Setup</StyledHeading>
            <StyledContainer>
                <MachineComponent image={ROPlant} title={"This is 4000 LPH RO Plant"} />
                <MachineComponent image={PackagingMachine} title={"This is Bottle Filling Machine & Packeging Line"} />
                <MachineComponent image={BlowingMachine} title={"This is Bottle Blowing Machine"} />
            </StyledContainer>
        </StyledMainContainer>
    );
};

export default PlantSetup;

const MachineComponent = ({image, title}) => {
    return(
        <StyledMachineContainer>
            <StyledImage src={image} alt="Machine" />
            <StyledText>{title}</StyledText>
        </StyledMachineContainer>
    );
};

const StyledMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
`;
const StyledHeading = styled.h1`
    color: #fff;
    font-weight: 600;
    font-size: 4rem;
    text-align: center;
    @media screen and (max-width: 500px) {
        font-size: 3rem;
    }
`
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;
const StyledMachineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StyledImage = styled.img`
    width: 25rem;
    height: 15rem;
    border-radius: 1rem;
    @media screen and (max-width: 1024px) {
        width: 90vW;
        height: 50vH;
    }
`;
const StyledText = styled.p`
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
`;