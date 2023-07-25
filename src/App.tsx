import React, { ReactNode, useState } from "react";

import "./App.css";
import { FloweringMoon } from "./FloweringMoon";
import { StrawberryMoon } from "./StrawberryMoon";
import ValeImage from "./images/vale.jpeg";
import styled from "styled-components";
import { BuckMoon } from "./BuckMoon";
import { SturgeonMoon } from "./SturgeonMoon";
import { SnowMoon } from "./SnowMoon";
import { PinkMoon } from "./PinkMoon";
import { WormMoon } from "./WormMoon";
// TODO add routing so people can link to pages they participated in

type SelectedMoon =
  | "snow"
  | "worm"
  | "pink"
  | "strawberry"
  | "flowering"
  | "buck"
  | "sturgeon";

const moonMap: { [key: string]: ReactNode } = {
  strawberry: <StrawberryMoon />,
  flowering: <FloweringMoon />,
  buck: <BuckMoon />,
  sturgeon: <SturgeonMoon />,
  snow: <SnowMoon />,
  pink: <PinkMoon />,
  worm: <WormMoon />,
};
function App() {
  const [moon, setMoon] = useState<SelectedMoon>("sturgeon");
  const moonHasBackdrop = !!["flowering", "strawberry"].find(
    (inList) => moon === inList
  );
  return (
    <div className="App">
      <header className="App-header">
        <Backdrop selectedMoon={moon}>
          <MoonMenu moon={moon} setMoon={setMoon} />
          <BodyBackground showBackdrop={moonHasBackdrop}>
            {moonMap[moon]}
          </BodyBackground>
        </Backdrop>
      </header>
    </div>
  );
}

type BodyBackgroundProps = {
  showBackdrop: boolean;
};
const BodyBackground = styled.div<BodyBackgroundProps>`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  moon: SelectedMoon;
  setMoon: (moon: SelectedMoon) => void;
};
const MoonMenu: React.FC<MoonMenuProps> = ({
  moon: selectedMoon,
  setMoon: setSelectedMoon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickMoonButton = (clickedMoon: SelectedMoon) => {
    if (isOpen) {
      setSelectedMoon(clickedMoon);
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
        show={selectedMoon === "snow" || isOpen}
        selected={selectedMoon === "snow"}
        background={"#7bc3ff"}
        onClick={() => onClickMoonButton("snow")}
      >
        Snow Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={selectedMoon === "worm" || isOpen}
        selected={selectedMoon === "worm"}
        background={"#ff8f4e"}
        onClick={() => onClickMoonButton("worm")}
      >
        Worm Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={selectedMoon === "pink" || isOpen}
        selected={selectedMoon === "pink"}
        background={"#ff38b9"}
        onClick={() => onClickMoonButton("pink")}
      >
        Pink Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={selectedMoon === "flowering" || isOpen}
        selected={selectedMoon === "flowering"}
        background="#f3ff95"
        onClick={() => onClickMoonButton("flowering")}
      >
        Flowering Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={selectedMoon === "strawberry" || isOpen}
        selected={selectedMoon === "strawberry"}
        background="#fc7a7a"
        onClick={() => onClickMoonButton("strawberry")}
      >
        Strawberry Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={selectedMoon === "buck" || isOpen}
        selected={selectedMoon === "buck"}
        background={"#ffa684"}
        onClick={() => onClickMoonButton("buck")}
      >
        Buck Moon
      </MoonSelectButton>
      <MoonSelectButton
        show={selectedMoon === "sturgeon" || isOpen}
        selected={selectedMoon === "sturgeon"}
        background={"#d3e6f6"}
        onClick={() => onClickMoonButton("sturgeon")}
      >
        Sturgeon Moon
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
  font-size: 18px;
  font-weight: 800;
  padding: 20px;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.show ? "flex" : "none")};
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.selected ? `0px 0px 40px 40px ` + props.background + "dd" : ""};
  border: ${(props) =>
    props.selected ? `3px solid white` : "3px solid transparent"};
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 40px 40px ${(props) => props.background}ee;
  }
`;

const moonCSS: { [key in SelectedMoon]: string } = {
  strawberry: ` background-color: #f3658b;`,
  flowering: `background-image: url(${ValeImage});`,
  buck: `background-color: black;`,
  sturgeon: ` background-color: #1a0540;`,
  pink: ` background-color: #1a0540;`,
  worm: ` background-color: #1a0540;`,
  snow: ` background-color: #1a0540;`,
};

type BackdropProps = {
  selectedMoon: SelectedMoon;
};
const Backdrop = styled.div<BackdropProps>`
  ${(props) => moonCSS[props.selectedMoon]}
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

// todo: add background image or color, update colors for strawberry moon, make insta post, publish
export default App;
