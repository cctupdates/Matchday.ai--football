import React, { useState } from "react";
import {
  PlayerDetails,
  TopPlayer,
  Divider,
  Teams,
  Container,
  Icon,
} from "./style";
import SinglePlayer from "./SinglePlayer/SinglePlayer";
import FootballJersey from "../../../images/Football-Jersey.svg";
import FootballPlayer from "../../../images/football-player.svg";
import {Team1, Team2} from './PlayersData'
 
const PlayerGroup = () => {
  const [swap, setSwap] = useState(false);
  const [active, setActive] = useState(true);
  const [unActive, setUnActive] = useState(false);

  return (
    <PlayerDetails>
      <Container>
        <Icon
          bg={active}
          onClick={() => {
            setSwap(false);
            setActive(true);
            setUnActive(false);
          }}
        >
          <img alt="" src={FootballJersey} />
        </Icon>
        <Icon
          bg={unActive}
          onClick={() => {
            setSwap(true);
            setActive(false);
            setUnActive(true);
          }}
        >
          <img alt="" src={FootballPlayer} />
        </Icon>
      </Container>
      <Teams>
        <TopPlayer>
          <SinglePlayer
            name="Messi"
            number="10"
            image="https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=c79d25a2c6e58ffa114d6b5c0b15ce78"
            swap={swap}
            color="primary"
          />
        </TopPlayer>
        {React.Children.toArray(
          Team1?.map((item) => {
            return (
              <SinglePlayer
                name={item.name}
                number={item.number}
                image={item.image}
                swap={swap}
                color="primary"
              />
            );
          })
        )}
      </Teams>
      <Divider></Divider>
      <Teams>
        {React.Children.toArray(
          Team2?.map((item) => {
            return (
              <SinglePlayer
                name={item.name}
                number={item.number}
                image={item.image}
                swap={swap}
                color="secondary"
              />
            );
          })
        )}
        <TopPlayer noMargin>
          <SinglePlayer
            name="Messi"
            number="10"
            image="https://i.guim.co.uk/img/media/a7fe7170defa865d2b96b829f05c5d8fa82d8edf/0_20_2201_1321/master/2201.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=c79d25a2c6e58ffa114d6b5c0b15ce78"
            swap={swap}
          />
        </TopPlayer>
      </Teams>
    </PlayerDetails>
  );
};

export default PlayerGroup;
