import React, { useEffect } from "react";
import { useLocalContext } from "../../../Context.js/Context";
import { Wrapper, SliderStyle } from "./style";

// let marks = [];

const marks = [
  {
    value: 0,
    label: "0sec",
  },
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
  {
    value: 50,
    label: "5sec",
  },
  {
    value: 60,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,
  },
  {
    value: 100,
    label: "10sec",
  },
];

const Controller = () => {
  const { scale } = useLocalContext();
  console.log("Controller", scale);

  return (
    <Wrapper>
      <SliderStyle
        max={scale}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Wrapper>
  );
};

export default Controller;
