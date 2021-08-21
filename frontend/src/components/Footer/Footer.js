import React from "react";
import {
  Container,
  TextSection,
  FirstText,
  SecondText,
  ContactSection,
  Socials,
  Button,
} from "./style";
import EmailSvg from "../SVG/EmailSvg";
import InstaSvg from "../SVG/InstaSvg";
import TwitterSvg from "../SVG/TwitterSvg";
import FacebookSvg from "../SVG/FacebookSvg";
import LinkedInSvg from "../SVG/LinkedInSvg";

const Navbar = () => {
  return (
    <Container>
      <TextSection>
        <FirstText>MatchDay AI - AI enabled intelligence!</FirstText>
        <SecondText>Copyright | FAQs | Privacy Policy</SecondText>
      </TextSection>
      <ContactSection>
        <Button>Contact Us</Button>
        <Socials>
          <EmailSvg />
          <InstaSvg />
          <TwitterSvg />
          <FacebookSvg />
          <LinkedInSvg />
        </Socials>
      </ContactSection>
    </Container>
  );
};

export default Navbar;
