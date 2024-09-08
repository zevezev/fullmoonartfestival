import styled from "styled-components";
import { importAllImagesInFolder } from "../importAllImagesInFolder";
import { Gallery } from "../Gallery";

// Importing all images in the 'assets/images' folder
const images: any[] = importAllImagesInFolder(
  require.context("./", false, /\.(png|jpe?g)$/)
);

export const BeaverMoon = () => {
  return (
    <Beaver>
      <Gallery images={images} />
      <p>
        November 27 2023, Park Slope, Brooklyn / Lenapehoking
        <br />
        <br />
        The indiginous name for this moon is the Beaver Moon. It's the season
        where beavers begin to hide in their shelters in preparation for the
        winter, and the last full moon before the solstice. We might think about
        things like protection, community, hiding, safety, preparing for winter,
        coziness, etc.
        <p>
          Sources -&nbsp;
          <a href="https://www.almanac.com/full-moon-november">
            Old Farmer's Almanac
          </a>
        </p>
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
