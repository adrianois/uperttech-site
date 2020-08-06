import React from "react";
import styled from "styled-components";
import Brand from "./Brand";

export default function Navbar(props: any): JSX.Element {
  return (
    <StyledNavbar>
      <Brand height="20px" />
      <nav>
        <NavButtom href="#">Quem somos</NavButtom>
        <NavButtom href="#">Serviços</NavButtom>
        <NavButtom href="#">Produtos</NavButtom>
      </nav>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  padding: 30px 70px 30px 40px;
  align-items: center;
  justify-content: space-between;
`;

const NavButtom = styled.a`
  margin-left: 30px;
  font-weight: 600;
  font-size: 18px;
`;
