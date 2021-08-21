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
import { Button } from "../CustomButton/style";
import { useLocalContext } from "../../../Context.js/Context";

const CenterDiv = (props) => {
  const ButtonsArrayB = [
    { id:"b1",text: "Loremip" },
    { id:"b2",text: "Loremip" },
    { id:"b3",text: "Loremip" },
    { id:"b4",text: "Loremip" },
    { id:"b5",text: "Loremip" },
    { id:"b6",text: "Loremip" },
    { id:"b7",text: "Loremip" },
    { id:"b8",text: "Loremip" },
    { id:"b9",text: "Loremip" },
    { id:"b10",text: "Loremip" },
    { id:"b11",text: "Loremip" },
    { id:"b12",text: "Loremip" },
    { id:"b13",text: "Loremip" },
    { id:"b14",text: "Loremip" },
    { id:"b15",text: "Loremip" },
  ];
  const ButtonsArrayC = [
    { id:"c1",text: "Loremip" },
    { id:"c2",text: "Loremip" },
    { id:"c3",text: "Loremip" },
    { id:"c4",text: "Loremip" },
    { id:"c5",text: "Loremip" },
    { id:"c6",text: "Loremip" },
  ];

  const DropDownOptions = [
    { option: "10" },
    { option: "20" },
    { option: "30" },
    { option: "40" },
  ];

  const { setBtnsB, setBtnsC } = useLocalContext();

  return (
    <MiddleDiv>
      <ButtonContainer>
        <ButtonsDiv2>
          {React.Children.toArray(
            ButtonsArrayB?.map((item) => {
              return <Button onClick={() => setBtnsB(item.id)} type="secondary">{item.text}</Button>
            })
          )}
        </ButtonsDiv2>
        <Divider></Divider>
        <ButtonsDiv3>
          {React.Children.toArray(
            ButtonsArrayC?.map((item) => {
                return <Button onClick={() => setBtnsC(item.id)} type="secondary">{item.text}</Button>
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
