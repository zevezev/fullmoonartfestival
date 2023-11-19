import styled from "styled-components";
import leafbagel from "../images/beavermoon/grave leaf.jpeg";

export const BeaverMoon = () => {
  return (
    <Beaver>
      <p>
        The Beaver Moon is Monday, November 27 at 7pm in Park Slope, Bk.{" "}
        <a href="https://www.instagram.com/fullmoonartfestival/">
          Message @fullmoonartfestival
        </a>{" "}
        for the address!
      </p>
      You're invited to the Beaver Moon Gathering!! Using my apartment space,
      paint, paper, instruments, and our bodies, we'll collaborate on art
      inspired by this beaver moon.
      <br />
      It'll be a free-flowing art jam where everyone is invited to co-create the
      space. Supplies and snacks will be provided!
      <br /> You're invited to bring any supplies and art you want to share.
      <br />
      The indiginous name for this moon is the Beaver Moon. It's the season
      where beavers begin to hide in their shelters in preparation for the
      winter, and the last full moon before the solstice. We might think about
      things like protection, community, hiding, safety, preparing for winter,
      coziness, etc.
      <img
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        src={leafbagel}
        alt="leaf bagel grave"
      />
      <p>
        Sources -&nbsp;
        <a href="https://www.almanac.com/full-moon-november">
          Old Farmer's Almanac
        </a>
      </p>
    </Beaver>
  );
};
const Beaver = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  color: #e6ccd3;
`;
