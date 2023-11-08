import styled from "styled-components";
import { Contact } from "../components/Contact";
export const WormMoon = () => {
  // TODO: picture
  return (
    <Strawberry>
      <div>
        At the worm moon, we scavenged Park Slope for interesting material left
        on stoops, then created assemblage sculptures together. Work by Maria
        Leonard, Pau Oliveres, Jeff Demanche, and Zev Izenberg pictured.
      </div>

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
