import React, { useEffect } from "react";
import { useLocalContext } from "../../../Context.js/Context";
import { Wrapper, SliderStyle } from "./style";

let marks = [];

// const marks = [
//   {
//     value: 0,
//     label: "0sec",
//   },
//   {
//     value: 10,
//   },
//   {
//     value: 20,
//   },
//   {
//     value: 30,
//   },
//   {
//     value: 40,
//   },
//   {
//     value: 50,
//     label: "5sec",
//   },
//   {
//     value: 60,
//   },
//   {
//     value: 70,
//   },
//   {
//     value: 80,
//   },
//   {
//     value: 90,
//   },
//   {
//     value: 100,
//     label: "10sec",
//   },
// ];

const Controller = () => {
  const { scale } = useLocalContext();
  console.log("Controller", scale);

  const handleSlider = () => {
    let value1 = 0;
    let value2 = 0;
    if (marks.length < 100 / scale || marks.length === 0) {
      for (let i = 0; i < 100; i++) {
        if (value2 >= 100) {
          return;
        } else {
          value2 = value1 + scale;
          marks.push({ value2 });
          value1 = value2;
          console.log("value", value2);
        }
        console.log("nooo", marks);
      }
    } else {
      return marks;
    }
  };

  useEffect(() => {
    handleSlider();
  }, [scale]);

  return (
    <Wrapper>
      <SliderStyle
        max={scale}
        onChange={handleSlider}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Wrapper>
  );
};

export default Controller;
