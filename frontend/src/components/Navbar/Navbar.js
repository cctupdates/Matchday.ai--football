import { Avatar } from "@material-ui/core";
import React from "react";
import { Container, Logo, Name, Icons } from "./style";
import NavTab from "./NavTab/NavTab";
import CartSvg from "../SVG/CartSvg";
import AccountSvg from "../SVG/AccountSvg";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <Avatar
          style={{ width: "30px", height: "30px" }}
          alt="Remy Sharp"
          src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg"
        />
        <Name>MatchDay AI</Name>
      </Logo>
      <NavTab />
      <Icons>
        <CartSvg />
        <AccountSvg />
      </Icons>
    </Container>
  );
};

export default Navbar;
