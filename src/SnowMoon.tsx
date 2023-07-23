import styled from "styled-components";
import { Contact } from "./components/Contact";
import Pic1 from "./images/snowMoon/IMG_7035.jpg";
import Pic2 from "./images/snowMoon/sculptures.jpeg";
import Pic3 from "./images/snowMoon/IMG_7300.jpeg";
import Pic4 from "./images/snowMoon/IMG_7301.jpeg";
import Pic5 from "./images/snowMoon/IMG_7302.jpeg";

// import ShadowSynthesisVideo from "./images/snowMoon/shadow_synthesis.mov";
const Pics = [Pic1, Pic2, Pic3, Pic4, Pic5];
export const SnowMoon = () => {
  return (
    <Strawberry>
      <div>
        The Snow Moon was our very first Full Moon Art Fesival.
        <br />
        We had a Synesthetic Jam, where artists of different media worked off
        each others' improvisations, creating feedback loops across media.
        <br />
        What is captured in the translation? Can the same thing be expressed
        through music and movement; how do the two working together change each
        other?
      </div>
      {Pics.map((pic) => (
        <img src={pic} />
      ))}
      {/* <video src={ShadowSynthesisVideo} /> */}

      <Contact />
    </Strawberry>
  );
};
const Strawberry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    color: rgb(238, 147, 171);
  }
`;
