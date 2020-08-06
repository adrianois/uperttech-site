import React from "react";
import styled from "styled-components";
import Brand from "./Brand";

export default function Navbar(props: any): JSX.Element {
  return (
    <StyledNavbar>
      <Brand height="10px" />
      <nav>
        <NavButtom>Quem somosasdsad</NavButtom>
      </nav>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  padding: 20px 30px;
  align-items: center;
`;

const NavButtom = styled.a``;
