import React from "react";
import {
  MiddleDiv,
  ButtonContainer,
  ButtonsDiv2,
  Divider,
  ButtonsDiv3,
  BottomItems,
  DropDownContainer,
  ExtraButton,
  GoBackButton,
} from "./style";

import DropDown from "../../../components/DropDown/DropDown";
import CustomButton from "../CustomButton/CustomButton";

const CenterDiv = (props) => {
  const ButtonsArray2 = [
    { id:"1",text: "Loremip" },
    { id:"2",text: "Loremip" },
    { id:"3",text: "Loremip" },
    { id:"4",text: "Loremip" },
    { id:"5",text: "Loremip" },
    { id:"6",text: "Loremip" },
    { id:"7",text: "Loremip" },
    { id:"8",text: "Loremip" },
    { id:"9",text: "Loremip" },
    { id:"10",text: "Loremip" },
    { id:"11",text: "Loremip" },
    { id:"12",text: "Loremip" },
    { id:"13",text: "Loremip" },
    { id:"14",text: "Loremip" },
    { id:"15",text: "Loremip" },
  ];
  const ButtonsArray3 = [
    { id:"1",text: "Loremip" },
    { id:"2",text: "Loremip" },
    { id:"3",text: "Loremip" },
    { id:"4",text: "Loremip" },
    { id:"5",text: "Loremip" },
    { id:"6",text: "Loremip" },
  ];

  const DropDownOptions = [
    { option: "10" },
    { option: "20" },
    { option: "30" },
    { option: "40" },
  ];

  return (
    <MiddleDiv>
      <ButtonContainer>
        <ButtonsDiv2>
          {React.Children.toArray(
            ButtonsArray2?.map((item) => {
              return <CustomButton type="secondary" id={item.id} text={item.text} />;
            })
          )}
        </ButtonsDiv2>
        <Divider></Divider>
        <ButtonsDiv3>
          {React.Children.toArray(
            ButtonsArray3?.map((item) => {
              return <CustomButton type="secondary" id={item.id} text={item.text} />;
            })
          )}
        </ButtonsDiv3>
      </ButtonContainer>
      <BottomItems>
        <DropDownContainer>
          <DropDown
            DropdownOptions={DropDownOptions}
            bg="#171717"
            color="#ffffff"
          />
        </DropDownContainer>
        {props.showButton ? (
          <ExtraButton secondary onClick={() => props.handleHideButton()}>
            ExtraButton
          </ExtraButton>
        ) : (
          <ExtraButton onClick={() => props.handleShowButton()}>
            ExtraButton
          </ExtraButton>
        )}
      </BottomItems>
      <GoBackButton>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.59868 8.73335L1.5592 4.82224L4.59868 0.911133"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Go Back
      </GoBackButton>
    </MiddleDiv>
  );
};

export default CenterDiv;
