import React, { ReactNode, useState } from "react";

import "./App.css";
import { FloweringMoon } from "./FloweringMoon";
import { StrawberryMoon } from "./StrawberryMoon";
import ValeImage from "./images/vale.jpeg";
import styled from "styled-components";
import { BuckMoon } from "./BuckMoon";

type SelectedMoon = "strawberry" | "flowering" | "buck";
const moonMap: { [key in SelectedMoon]: ReactNode } = {
  strawberry: <StrawberryMoon />,
  flowering: <FloweringMoon />,
  buck: <BuckMoon />,
};
function App() {
  const [moon, setMoon] = useState<SelectedMoon>("buck");
  return (
    <div className="App">
      <header className="App-header">
        <Backdrop selectedMoon={moon}>
          <div
            style={{
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              backgroundColor: "rgba(15, 31, 29, 0.7)",
              padding: "20px",
              borderRadius: "16px",
              textAlign: "start",
              margin: "30px",
            }}
          >
            {moonMap[moon]}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              padding: "0px 20px 20px 20px",
              overflow: "hidden",
              flexWrap: "wrap",
            }}
          >
            <MoonSelectButton
              selected={moon === "flowering"}
              style={{ background: "rgb(230, 242, 136,.7)", color: "black" }}
              onClick={() => setMoon("flowering")}
            >
              May: Flowering Moon
            </MoonSelectButton>
            <MoonSelectButton
              selected={moon === "strawberry"}
              style={{ background: "rgba(239,39,39,.7)" }}
              onClick={() => setMoon("strawberry")}
            >
              June: Strawberry Moon
            </MoonSelectButton>
            <MoonSelectButton
              selected={moon === "buck"}
              style={{ background: "black" }}
              onClick={() => setMoon("buck")}
            >
              July: Buck Moon
            </MoonSelectButton>
          </div>
        </Backdrop>
      </header>
    </div>
  );
}

type MoonSelectProps = {
  selected?: boolean;
  background?: string;
  color?: string;
};
const MoonSelectButton = styled.div<MoonSelectProps>`
  background: rgba(12, 25, 23, 0.7);
  padding: 16px;
  width: 90px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 40px;
  border: ${(props) =>
    props.selected ? `3px solid white` : "3px solid transparent"};
  cursor: pointer;
  :hover {
    background: "rgba(12, 25, 23)";
  }
`;

const moonCSS: { [key in SelectedMoon]: string } = {
  strawberry: ` background-color: #f3658b;`,
  flowering: `background-image: url(${ValeImage});`,
  buck: `background-color: black;`,
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
