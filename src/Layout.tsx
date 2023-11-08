import React, { ReactNode, useState } from "react";
import "./App.css";
import { FloweringMoon } from "./moons/FloweringMoon";
import { StrawberryMoon } from "./moons/StrawberryMoon";
import ValeImage from "./images/vale.jpeg";
import styled from "styled-components";
import { BuckMoon } from "./moons/BuckMoon";
import { SturgeonMoon } from "./moons/SturgeonMoon";
import { SnowMoon } from "./moons/SnowMoon";
import { PinkMoon } from "./moons/PinkMoon";
import { WormMoon } from "./moons/WormMoon";
import { BeaverMoon } from "./moons/BeaverMoon";
import { useNavigate } from "react-router-dom";
import { EMoon } from "./App";
// TODO add routing so people can link to pages they participated in

const moonMap: { [key in EMoon]: ReactNode } = {
  strawberry: <StrawberryMoon />,
  flowering: <FloweringMoon />,
  buck: <BuckMoon />,
  sturgeon: <SturgeonMoon />,
  snow: <SnowMoon />,
  pink: <PinkMoon />,
  worm: <WormMoon />,
  beaver: <BeaverMoon />,
};

export const Layout = ({ moon }: { moon: EMoon }) => {
  const navigate = useNavigate();
  const setMoon = (moon: EMoon) => navigate(`/fullmoonartfestival/${moon}`);
  const moonHasBackdrop = !![EMoon.flowering, EMoon.strawberry].find(
    (inList) => moon === inList
  );
  return (
    <Backdrop EMoon={moon}>
      <MoonMenu moon={moon} setMoon={setMoon} />
      <BodyBackground showBackdrop={moonHasBackdrop}>
        {moonMap[moon]}
      </BodyBackground>
    </Backdrop>
  );
};

type BodyBackgroundProps = {
  showBackdrop: boolean;
};
const BodyBackground = styled.div<BodyBackgroundProps>`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  background-color: ${(props) =>
    props.showBackdrop ? "rgba(15, 31, 29, 0.7)" : ""};
  padding: 20px;
  border-radius: 16px;
  text-align: start;
  margin: 30px;
  @media only screen and (max-width: 600px) {
    max-width: 90vw;
  }
`;
type MoonMenuProps = {
  moon: EMoon;
  setMoon: (moon: EMoon) => void;
};
const MoonMenu: React.FC<MoonMenuProps> = ({ moon, setMoon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickMoonButton = (clickedMoon: EMoon) => {
    if (isOpen) {
      setMoon(clickedMoon);
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        width: "100%",
        padding: "80px 0px 80px 0px",
        overflow: "hidden",
        flexWrap: "wrap",
      }}
    >
      <MoonSelectButton
        show={moon === EMoon.snow || isOpen}
        selected={moon === EMoon.snow}
        background={"#7bc3ff"}
        onClick={() => onClickMoonButton(EMoon.snow)}
      >
        Snow Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={moon === EMoon.worm || isOpen}
        selected={moon === EMoon.worm}
        background={"#ff8f4e"}
        onClick={() => onClickMoonButton(EMoon.worm)}
      >
        Worm Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={moon === EMoon.pink || isOpen}
        selected={moon === EMoon.pink}
        background={"#ff38b9"}
        onClick={() => onClickMoonButton(EMoon.pink)}
      >
        Pink Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={moon === EMoon.flowering || isOpen}
        selected={moon === EMoon.flowering}
        background="#f3ff95"
        onClick={() => onClickMoonButton(EMoon.flowering)}
      >
        Flowering Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={moon === EMoon.strawberry || isOpen}
        selected={moon === EMoon.strawberry}
        background="#fc7a7a"
        onClick={() => onClickMoonButton(EMoon.strawberry)}
      >
        Strawberry Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={moon === EMoon.buck || isOpen}
        selected={moon === EMoon.buck}
        background={"#ffa684"}
        onClick={() => onClickMoonButton(EMoon.buck)}
      >
        Buck Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={moon === EMoon.sturgeon || isOpen}
        selected={moon === EMoon.sturgeon}
        background={"#d3e6f6"}
        onClick={() => onClickMoonButton(EMoon.sturgeon)}
      >
        Sturgeon Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={moon === EMoon.beaver || isOpen}
        selected={moon === EMoon.beaver}
        background={"#c64f18"}
        onClick={() => onClickMoonButton(EMoon.beaver)}
      >
        Beaver Moon
      </MoonSelectButton>
    </div>
  );
};
type MoonSelectProps = {
  selected: boolean;
  background: string;
  show: boolean;
};
const MoonSelectButton = styled.div<MoonSelectProps>`
  background: ${(props) => props.background};
  color: #3b134b;
  font-size: 24px;
  font-weight: 800;
  padding: 20px;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.show ? "flex" : "none")};
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.selected ? `0px 0px 25px 25px ` + props.background + "dd" : ""};
  border: ${(props) =>
    props.selected ? `3px solid white` : "3px solid transparent"};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 20px 20px ${(props) => props.background}ee;
  }
  transition: box-shadow 0.2s;
`;

const moonCSS: { [key in EMoon]: string } = {
  strawberry: ` background-color: #f3658b;`,
  flowering: `background-image: url(${ValeImage});`,
  buck: `background-color: black;`,
  sturgeon: ` background-color: #1a0540;`,
  pink: ` background-color: #1a0540;`,
  worm: ` background-color: #1a0540;`,
  snow: ` background-color: #1a0540;`,
  beaver: ` background-color: #1a0540;`,
};

type BackdropProps = {
  EMoon: EMoon;
};
const Backdrop = styled.div<BackdropProps>`
  ${(props) => moonCSS[props.EMoon]}
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
