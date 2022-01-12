import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

class NaviBar extends React.Component {
    render() {

        const NaviWrapper = styled.nav`
        display: flex;
        background-color: #000;
        height: 50px;
        width: 100%;
        align-items: center;
        `;

        const NaviLink = styled(Link)`
        text-decoration: none;
        font-weight: bold;
        color: #fff;
        margin-left: 30px;
        &:hover{
            color: grey;
        }
        `;

        return (
            <NaviWrapper>
                <NaviLink to="/">Home</NaviLink>
                <NaviLink to="/about">About</NaviLink>
                <NaviLink to="/contact">Contact Us</NaviLink>
            </NaviWrapper>
        );
    }
}

export default NaviBar;