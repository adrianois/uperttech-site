import React from "react";
import styled from "styled-components";
import Brand from "./Brand";
import ActionButton from "./ActionButtom";
import { MdMenu } from "react-icons/md";

export default function Navbar(props: any): JSX.Element {
  return (
    <StyledNavbar>
      <StyledBrand />
      <Nav>
        <NavButtom href="#" primary>
          Quem somos
        </NavButtom>
        <NavButtom href="#">Serviços</NavButtom>
      </Nav>
      <NavActionButton text="Soluções" />
      <MenuButton>
        <MdMenu size="25px" color="#fff" />
      </MenuButton>
    </StyledNavbar>
  );
}

const NavActionButton = styled(ActionButton)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  display: none;

  padding: 7px;
  background-color: #4e71fb;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledBrand = styled(Brand)`
  height: 20px;
  margin-right: 30px;

  @media (max-width: 768px) {
    height: unset;
    width: 45%;
  }
`;

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  padding: 25px 40px;
  align-items: center;
  justify-content: space-between;
  background-color: #fffffff2;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButtom = styled.a`
  margin-left: 30px;
  font-weight: ${(props: any) => (props.primary ? 600 : 400)};
  font-size: 16px;
`;
