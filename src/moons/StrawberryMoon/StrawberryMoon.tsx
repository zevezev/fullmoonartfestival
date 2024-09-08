import styled from "styled-components";
import strawberrySuspension from "../../images/strawberry_suspension.jpeg";
import { Gallery } from "../Gallery";
import { importAllImagesInFolder } from "../importAllImagesInFolder";
// Importing all images in the 'assets/images' folder
const images: any[] = importAllImagesInFolder(
  require.context("./", false, /\.(png|jpe?g)$/)
);
export const StrawberryMoon = () => {
  return (
    <Strawberry>
      <Gallery images={images} />
      <div>June 4 2023, 7pm - Sundown. Buena Vista Park, San Francisco.</div>
      <div>
        If you're running late, come meet us at the&nbsp;
        <a href="https://goo.gl/maps/CEhWwhfcgRZPDMECA">top of the park.</a>
      </div>
      <div>
        We ascended to the circle at the top of San Francisco to do art
        together. Many fruits and art supplies were shared. The sun went down
        and the fog rolled over the mountain, immersing us.
      </div>
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
