import React, { useState } from "react";
import CenterDiv from "./CenterDiv/CenterDiv";
import PlayerGroup from "./PlayersGroup/PlayerGroup";
import {
  Wrapper,
  Container,
  VideoPlayerDiv,
  ControllerDiv,
  ButtonsDiv,
} from "./style";
import Controller from "./Controller/Controller";
import Video from "./VideoSection/Video";
import { Button } from "./CustomButton/style";
import { useLocalContext } from "../../Context.js/Context";

const FootBallAdminPanel = () => {
  const ButtonsArray1 = [
    { id: "a1", text: "Loremip" },
    { id: "a2", text: "Loremip" },
    { id: "a3", text: "Loremip" },
    { id: "a4", text: "Loremip" },
    { id: "a5", text: "Loremip" },
    { id: "a6", text: "Loremip" },
    { id: "a7", text: "Loremip" },
    { id: "a8", text: "Loremip" },
    { id: "a9", text: "Loremip" },
    { id: "a10", text: "Loremip" },
    { id: "a11", text: "Loremip" },
    { id: "a12", text: "Loremip" },
    { id: "a13", text: "Loremip" },
    { id: "a14", text: "Loremip" },
    { id: "a15", text: "Loremip" },
    { id: "a16", text: "Loremip" },
  ];

  const [showButton, setShowButton] = useState(false);
  const { setBtnsA } = useLocalContext();

  return (
    <Wrapper>
      <Container>
        <VideoPlayerDiv>
          <Video />
          <ControllerDiv>
            <Controller />
          </ControllerDiv>
          {showButton && (
            <ButtonsDiv>
              {React.Children.toArray(
                ButtonsArray1?.map((item) => {
                  return (
                    <Button  onClick={() => setBtnsA(arr => [...arr , item.id])} type="primary">{item.text}</Button>
                  );
                })
              )}
            </ButtonsDiv>
          )}
        </VideoPlayerDiv>
        <CenterDiv
          showButton={showButton}
          handleShowButton={() => setShowButton(true)}
          handleHideButton={() => setShowButton(false)}
        />
        <PlayerGroup />
      </Container>
    </Wrapper>
  );
};

export default FootBallAdminPanel;
