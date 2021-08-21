import React from "react";
import { useLocalContext } from "../../../Context.js/Context";
import { Wrapper, SliderStyle } from "./style";

// let marks = [
//   {
//     value: 0,
//     label: "0sec",
//   },
//   {
//     value: 1,
//   },
//   {
//     value: 2,
//   },
//   {
//     value: 3,
//   },
//   {
//     value: 4,
//   },
//   {
//     value: 5,
//     label: "5sec",
//   },
//   {
//     value: 6,
//   },
//   {
//     value: 7,
//   },
//   {
//     value: 8,
//   },
//   {
//     value: 9,
//   },
//   {
//     value: 10,
//     label: "10sec",
//   },
// ];

const Controller = () => {
  const { scale } = useLocalContext();
  console.log("Controller", scale);

  // const handleSlider = () => {
  //   marks = [];
  //   if (marks.length > scale + 1) {
  //     return ;
  //   } else {
  //     for (let i = 0; i <= scale; i++) {
  //       marks.push({ value: i, label: `${i}sec` });
  //     }
  //     console.log(marks);
  //     return marks;
  //   }
  // };

  // useEffect(() => {
  //     handleSlider();
  // }, [scale])

  return (
    <Wrapper>
      <SliderStyle
        max={scale}
        // onClick={handleSlider}
        step={1}
        marks={true}
        valueLabelDisplay="on"
      />
    </Wrapper>
  );
};

export default Controller;
