import styled from "styled-components/macro";

export const Wrapper = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  /* width: 1706px; */
  height: 100%;
  min-width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #171717;

  @media (max-width:1265px){
    height: 800px;
  }
  @media (max-width:1200px){
    height: 850px;
  }
  @media (max-width:1130px){
    height: 900px;
  }
  @media (max-width:1070px){
    height: 950px;
  }
  @media (max-width:1010px){
    height: 1000px;
  }
`;

export const VideoPlayerDiv = styled.div`
  width: max-content;
  height: max-content;
  margin-left: 7px;
`;

export const ControllerDiv = styled.div`
  position: relative;
  margin: 20px 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;


export const Icon = styled.div`
  width: 47px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #48b499;
  position: ${(props) => (props.right && "absolute")};
  right: ${(props) => (props.right && "0")};
`;

export const ButtonsDiv = styled.div`
  margin: 0px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 90px;
  min-height: 90px;
  min-width:800px;
`;
