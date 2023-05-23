import React, { useState } from "react";

import "./App.css";
import { FloweringMoon } from "./FloweringMoon";
import { StrawberryMoon } from "./StrawberryMoon";
import styled from "styled-components";

type SelectedMoon = "strawberry" | "flowering";
function App() {
  const [moon, setMoon] = useState<SelectedMoon>("strawberry");
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
              backgroundColor: "rgba(12, 25, 23, 0.7)",
              padding: "20px",
              borderRadius: "16px",
              textAlign: "start",
              margin: "30px",
            }}
          >
            {moon === "flowering" ? (
              <FloweringMoon />
            ) : moon === "strawberry" ? (
              <StrawberryMoon />
            ) : (
              <></>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              padding: "0px 20px 20px 20px",
              overflow: "hidden",
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
  border-radius: 40px;
  border: ${(props) =>
    props.selected ? `3px solid white` : "3px solid transparent"};
  cursor: pointer;
  :hover {
    background: "rgba(12, 25, 23)";
  }
`;

type BackdropProps = {
  selectedMoon?: SelectedMoon;
};
const Backdrop = styled.div<BackdropProps>`
  /* background-image: ${(props) =>
    props.selectedMoon === "flowering"
      ? `url("../public/images/flowering_moon/vale.jpeg"`
      : ""}; */
  background-color: #f3658b;
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
