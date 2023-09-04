import React, {useState} from "react";
import IcebergLogo from "../assets/IcebergLogo2.png";
import ShubhmanIndustryLogo from "../assets/ShubhmanIndustryLogo2.png";
import styled from "styled-components";

const Navbar = () => {

    return(
        <StyledNavbar>
            <StyledLogo src={IcebergLogo} alt="Logo" />
            <StyledLogo src={ShubhmanIndustryLogo} alt="Logo" />
        </StyledNavbar>
    );
}

export default Navbar;

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`

const StyledLogo = styled.img`
    width: 7rem;
`