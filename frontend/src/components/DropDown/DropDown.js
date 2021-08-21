import React from "react";
import "react-dropdown/style.css";
import { useLocalContext } from "../../Context.js/Context";
import { Select, Option, Label } from "./style";

const DropDown = (props) => {
  const {scale, setScale} = useLocalContext()
  console.log("Scallllleee" ,scale)
  return (
    <>
      <Label>{props.label}</Label>
      <Select
        value={scale}
        onChange={(e) => setScale(e.target.value)}
        border={props.border}
        color={props.color}
        bg={props.bg}
        >
        {React.Children.toArray(
          props.DropdownOptions?.map((item) => {
            return <Option>{item.option}</Option>;
          })
          )}
      </Select>
    </>
  );
};

export default DropDown;