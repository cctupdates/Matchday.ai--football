import styled from "styled-components/macro";
import Avatar from '@material-ui/core/Avatar';


export const Div = styled.div`
  position: relative;
  width: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 55px;
  margin: 0 5px;
  cursor: pointer;
`;

export const Number = styled.div`
  padding: 7px;
  z-index: 1;
  background-color: #ffffff;
  border-radius: 50%;
  font-weight: normal;
  font-size: 16px;
`;

export const NameDiv = styled.div`
  position: absolute;
  bottom: 3px;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => ((props.color === "primary") ? "#7F0104" : "#02306B")};
`;

export const Name = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #ffffff;
  margin-bottom: 5px;
`;


export const AvatarStyle = styled(Avatar)`
  z-index:1;
  width: 30px !important;
  height: 30px !important;
`;