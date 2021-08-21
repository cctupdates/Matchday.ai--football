import styled from "styled-components/macro";
import Slider from "@material-ui/core/Slider";

export const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #6d6d6d;
`;

export const SliderStyle = styled(Slider)`
  color: #4c76e5 !important;
  width: 97% !important;
  height: 20px !important;
  padding: 5px 0 !important;
  margin-bottom: 0px !important;
  & .MuiSlider-rail {
    background-color: #6d6d6d;
    height: 20px;
  }
  & .MuiSlider-track {
    background-color: #6d6d6d;
    height: 20px;
  }
  & .MuiSlider-mark {
    height: 20px;
    width: 1px;
    background-color: #7984a1;
  }
  & .MuiSlider-markLabel {
    color: #7984a1;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
  }
  & .PrivateValueLabel-circle-4 {
    width: 0px;
    height: 0px;
    border-radius: 0;
    margin-bottom: -5px;
    background-color: transparent;
    border-bottom:11px solid transparent;
    border-right:11px solid transparent;
    border-top:11px solid #4c76e5;
    border-left:11px solid transparent;
    transform: rotate(0deg);
  }
  & .PrivateValueLabel-offset-3 {
    top: -1px;
  }
  & .MuiSlider-valueLabel {
    left: -10px;
  }
  & .MuiSlider-thumb {
    margin-top: 0px;
    margin-left: 0px;
    width: 2px;
    border-radius: 0;
    height: 20px;
  }
  & .PrivateValueLabel-label-5 {
    display: none;
  }
  & .MuiSlider-thumb,
  .Mui-focusVisible,
  .MuiSlider-thumb
  :hover 
  {
  box-shadow: 0px !important;
  }
`;
