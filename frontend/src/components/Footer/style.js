import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 245px;
  min-height: 245px;
  background-color: #324371;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextSection = styled.div`
  height: 100px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FirstText = styled.h5`
  font-weight: 600;
  color: #ffffff;
  font-size: 28px;
`;

export const SecondText = styled.h6`
  font-weight: normal;
  color: #ffffff;
  font-size: 20px;
`;

export const ContactSection = styled.div`
  position: relative;
  margin-right: 5rem;
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  width: 162px;
  height: 53px;
  border: 2px solid white;
  background-color: inherit;
  border-radius: 7px;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #ffffff;
    color: #324371;
  }
`;

export const Socials = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`;
