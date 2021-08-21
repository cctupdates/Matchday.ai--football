import React from "react";
import {
  Wrapper,
  Container,
  CenterText,
  FieldAnalysisArea,
  TextArea,
  ImageArea,
  PlayerAnalysisArea,
  WrapperDropdown,
  ChangePageSection,
  LeftPageStyle,
  RightPageStyle,
  Text,
  DropDownContainer
} from "./style";
import PlayerTabs from "./PlayerTabs/PlayerTabs";
import FieldImage from "../../../images/FieldImage.jpg";
import AccordionComp from "./Accordions/Accordion";
import DropDown from "../../../components/DropDown/DropDown";
import LeftArrow from "../../../images/LeftArrow.svg";
import RightArrow from "../../../images/RightArrow.svg";

const RightContainer = () => {

  const DropdownOptions = [
    {option: 'Overview'},
    {option: 'Value1'},
    {option: 'Value2'},
  ]

  return (
    <Wrapper>
      <Container>
        <CenterText>Area Wise Analysis</CenterText>
        <FieldAnalysisArea>
          <TextArea>Select an area to view area wise analysis</TextArea>
          <ImageArea>
            <img src={FieldImage} alt="" />
          </ImageArea>
          <DropDownContainer>
            <DropDown border="none" color="#21294C" bg="#FFEFD6" label="Select Game" DropdownOptions={DropdownOptions} />
          </DropDownContainer>
        </FieldAnalysisArea>
        <PlayerAnalysisArea>
          <PlayerTabs />
          <WrapperDropdown>
            <AccordionComp percentage="10" text="Drop" />
            <AccordionComp percentage="20" text="Toss" />
            <AccordionComp percentage="20" text="Smash" />
          </WrapperDropdown>
        </PlayerAnalysisArea>
      </Container>
      <ChangePageSection>
        <LeftPageStyle>
          <img alt="" src={LeftArrow} />
          <Text>Rally Length Analysis</Text>
        </LeftPageStyle>
        <RightPageStyle>
          <Text>Area Wise Defence</Text>
          <img alt="" src={RightArrow} />
        </RightPageStyle>
      </ChangePageSection>
    </Wrapper>
  );
};

export default RightContainer;
