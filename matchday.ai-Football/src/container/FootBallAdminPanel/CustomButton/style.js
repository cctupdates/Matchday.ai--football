import styled from "styled-components/macro";

export const Button = styled.button`
  width: ${(props) => ((props.type === "primary") && "79px")} ;
  height: ${(props) => ((props.type === "primary") && "36px")};
  width: ${(props) => ((props.type === "secondary") && "65px")} ;
  height: ${(props) => ((props.type === "secondary") && "30px")};
  margin: ${(props) => ((props.type === "secondary") && "5px")};
  /* margin: 10px; */
  cursor: pointer;
  background-color: #171717;
  color: #48b499;
  border: 1px solid #48b499;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  
  :hover{
    color: #171717;
    background-color: #48b499;
  }
`;
