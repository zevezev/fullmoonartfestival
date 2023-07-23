import React, { ReactNode, useState } from "react";

import "./App.css";
import { FloweringMoon } from "./FloweringMoon";
import { StrawberryMoon } from "./StrawberryMoon";
import ValeImage from "./images/vale.jpeg";
import styled from "styled-components";
import { BuckMoon } from "./BuckMoon";
import { SturgeonMoon } from "./SturgeonMoon";
type SelectedMoon = "strawberry" | "flowering" | "buck" | "sturgeon";

const moonMap: { [key: string]: ReactNode } = {
  strawberry: <StrawberryMoon />,
  flowering: <FloweringMoon />,
  buck: <BuckMoon />,
  sturgeon: <SturgeonMoon />,
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
        background="#ff9090"
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
