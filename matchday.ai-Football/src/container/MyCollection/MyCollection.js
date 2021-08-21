import React from "react";
import {
  Wrapper,
  NavigationHistory,
  Icon,
  FirstNavigate,
  SecondNavigate,
  Banner,
  FirstPerson,
  SecondPerson,
  Body,
  HeaderDiv,
  Heading,
  SubHeading,
  SecondDiv,
  PlayerDetails1,
  PlayerDetails2,
  Versus,
  PlayerName,
  ScoreCard,
  ButtonsDiv,
  Button,
  MiddleSection,
} from "./style";
import Avatar from "@material-ui/core/Avatar";
import CenteredTab from "./CenteredTab/CenteredTab";
import LeftTable from "./LeftTable/LeftTable";
import RightContainer from "./RightContainer/RightContainer";
import Player2Image from "../../images/player2.svg";
import Player1Image from "../../images/player1.svg";
import NavigateNextOutlinedIcon from "../../images/arrowright.svg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MyCollection = () => {
  return (
    <>
    <Navbar/>
    <Wrapper>
      <NavigationHistory>
        <FirstNavigate>My Collection</FirstNavigate>
        <Icon>
          <img alt="" src={NavigateNextOutlinedIcon} />
        </Icon>
        <SecondNavigate>Tokyo Olympics</SecondNavigate>
      </NavigationHistory>
      <Banner>
        <FirstPerson>
          <img
            alt=""
            style={{ width: "100%", height: "100%" }}
            src={Player1Image}
          />
        </FirstPerson>
        <Body>
          <HeaderDiv>
            <Heading>Tokyo Olympics</Heading>
            <SubHeading>Semi Final Court 1</SubHeading>
          </HeaderDiv>
          <SecondDiv>
            <PlayerDetails1>
              <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.49111 18.5875L0 8.27753L8.11643 13.3126L12.4364 0.60498L15.9926 13.3126L24 8.27753L20.5091 18.5875C15.2631 16.7897 9.58171 16.7038 4.28377 18.3423L3.49111 18.5875Z"
                  fill="#FFB74D"
                />
              </svg>
              <Avatar
                alt=""
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              />
              <PlayerName>Shrikanth Kadambi</PlayerName>
            </PlayerDetails1>
            <Versus>
              <h6>v/s</h6>
              <ScoreCard>
                <span>11-21, 21-14, 21-19</span>
              </ScoreCard>
            </Versus>
            <PlayerDetails2>
              <Avatar
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png"
              />
              <PlayerName>Tanongsak Saensomboonsuk</PlayerName>
            </PlayerDetails2>
          </SecondDiv>
          <ButtonsDiv>
            <Button>Avg Rally Length : 9.6</Button>
            <Button>Rest/Point : 6.8s</Button>
            <Button>Match Duration : 1500s</Button>
          </ButtonsDiv>
        </Body>
        <SecondPerson>
          <img
            alt=""
            style={{ width: "100%", height: "100%" }}
            src={Player2Image}
          />
        </SecondPerson>
      </Banner>
      <CenteredTab />
      <MiddleSection>
        <LeftTable />
        <RightContainer />
      </MiddleSection>
    </Wrapper>
    <Footer/>
    </>
  );
};

export default MyCollection;
