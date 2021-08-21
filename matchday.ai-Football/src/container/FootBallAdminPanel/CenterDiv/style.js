import styled from "styled-components/macro";

export const MiddleDiv = styled.div`
  width: 226px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
  height: 100vh;
  min-height: 750px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 152px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsDiv2 = styled.div`
  width: 87%;
  min-width: 226px;
  min-height: 200px;
  height: max-content;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Divider = styled.div`
  width: 215px;
  height: 18px;
  margin: 10px 0;
  border: 1px solid rgba(72, 180, 153, 0.3);
`;

export const ButtonsDiv3 = styled.div`
  width: 87%;
  min-width: 226px;
  height: max-content;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-height: 80px;
`;

export const BottomItems = styled.div`
  position: absolute;
  width: 226px;
  top: 625px;
  height: max-content;
  display: flex;
  justify-content: space-around;
`;

export const DropDownContainer = styled.div`
  width: 84px;
  height: 35px;
`;

export const ExtraButton = styled.button`
  width: 109px;
  height: 35px;
  color: ${(props) => (props.secondary ? "#171717" : "#ffffff")};
  background-color: ${(props) => (props.secondary ? "#ffffff" : "#171717")};
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => (props.secondary ? "#171717" : "#ffffff")};
    color: ${(props) => (props.secondary ? "#ffffff" : "#171717")};
  }
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  right: 13px;
  top: 674px;
  border: none;
  background-color: #48b499;
  color: #ffffff;
  width: 80px;
  border-radius: 3px;
  height: 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
