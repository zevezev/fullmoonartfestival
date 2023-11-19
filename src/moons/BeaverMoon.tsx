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

      <p>The festival will start at 7pm. Contact Zev to get involved!</p>
      <p>
        The indiginous name for this moon is the Beaver Moon. It's the season
        where beavers begin to hide in their shelters in preparation for the
        winter, and the last full moon before the solstice. <br />
        <br />
        Using my apartment space, paint, paper, instruments, and our bodies,
        we'll collaborate on art that protects.
        <br />
        Supplies and snacks will be provided! You're invited to bring any
        supplies and art you want to share.
      </p>
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
