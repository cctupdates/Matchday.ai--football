import React, { useState } from "react";
import CenterDiv from "./CenterDiv/CenterDiv";
import CustomButton from "./CustomButton/CustomButton";
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

const FootBallAdminPanel = () => {
  const ButtonsArray1 = [
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
    { text: "Loremip" },
  ];
  const [showButton, setShowButton] = useState(false);

  return (
    <Wrapper>
      <Container>
        <VideoPlayerDiv>
          <Video/>
          <ControllerDiv>
            <Controller />
          </ControllerDiv>
          {showButton && (
            <ButtonsDiv>
              {React.Children.toArray(
                ButtonsArray1?.map((item) => {
                  return <CustomButton type="primary" text={item.text} />;
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
