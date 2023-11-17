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
      <img
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        src={leafbagel}
        alt="leaf bagel grave"
      />
      <p>The festival will start at 7pm. Contact Zev to get involved!</p>
      <p>
        The indiginous name for this moon is the Beaver Moon. It's the season
        where beavers begin to hide in their shelters in preparation for the
        winter, and the last full moon before the solstice. <br />
        <br />
        We recognize the the world in the state that it is, war and genocide
        around us and supported by our governments, alongside our personal
        tragedies and the coming winter. We seek to create a space that
        generates shelter, warmth, and community. <br />
        <br />
        Working with a variety of media, we'll collaborate on art that protects:
        symbols, dances, amulets, charms, spells, and prayers may be some of the
        things we make. As always, please bring any supplies you would like to
        use, anything that you'd want to incorporate into an artifact or ritual
        of protection, and any knowledge of safety/protection traditions from
        your life/culture. <br />
        <br />
        There'll be snackos and fun times and new friends and unexpected
        collaborations!
      </p>
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
