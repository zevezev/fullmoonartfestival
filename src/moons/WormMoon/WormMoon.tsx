import styled from "styled-components";
import { Contact } from "../../components/Contact";
import { importAllImagesInFolder } from "../importAllImagesInFolder";
import { Gallery } from "../Gallery";

// Importing all images in the 'assets/images' folder
const images2023: any[] = importAllImagesInFolder(
  require.context("./2023", false, /\.(png|jpe?g)$/)
);
// Importing all images in the 'assets/images' folder
const images2024: any[] = importAllImagesInFolder(
  require.context("./2024", false, /\.(png|jpe?g)$/)
);

export const WormMoon = () => {
  // TODO: picture
  return (
    <Strawberry>
      March 2024
      <div>A very wormy dance party.</div>
      <Gallery images={images2024} />
      March 2023
      <div>
        We scavenged Park Slope for interesting material left on stoops, then
        created assemblage sculptures together. Work by Maria Leonard, Pau
        Oliveres, Jeff Demanche, and Zev Izenberg pictured.
      </div>
      <Gallery images={images2023} />
      <Contact />
    </Strawberry>
  );
};
const Strawberry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  a {
    color: rgb(238, 147, 171);
  }
  .gallery {
    max-width: 350px;
  }
`;
