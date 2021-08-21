import styled from 'styled-components/macro';

export const PlayerDetails = styled.div`
  position: relative;
  width: 336px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

export const Divider = styled.div`
  width: 80%;
  min-width: 317px;
  height: 20px;
  min-height: 20px;
  margin: 10px 0;
  border: 1px solid rgba(72, 180, 153, 0.3);
`;

export const Teams = styled.div`
  width: 95%;
  height: 360px;
  min-height: 360px;
  min-width: 325px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const TopPlayer = styled.div`
  width: 100%;
  margin-top: ${(props) => (props.noMargin ? "0" : "15px")};
  display: flex;
  justify-content: center;  
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 30px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  border:0.5px solid #2E2D2D;
  background-color: ${(props) => ((props.bg === true) && "#48B499" )};
  background-color: ${(props) => ((props.bg === false) && "#171717")};
`;
