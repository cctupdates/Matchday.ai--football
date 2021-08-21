import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  min-height: 80px;
  background-color: #48b499;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 60px;
  width: 180px;
`;

export const Name = styled.h6`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

export const Icons = styled.div`
  position: absolute;
  right: 40px;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
