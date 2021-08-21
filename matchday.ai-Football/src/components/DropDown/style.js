import styled from 'styled-components/macro';

export const Label = styled.label`
  color:#21294C;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Select = styled.select`
  width: 100%;
  height:100%;
  color:${(props) => ((props.color === "#21294C") && "#21294C")};
  background-color:${(props) => ((props.bg === "#FFEFD6") && "#FFEFD6")};
  color:${(props) => ((props.color === "#ffffff") && "#ffffff")};
  background-color:${(props) => ((props.bg === "#171717") && "#171717")};
  border: ${(props) => ((props.border === "none") ? "none" : "1px solid white" )};
  border-radius:3px;
  cursor: pointer;
`;

export const Option = styled.option`
`