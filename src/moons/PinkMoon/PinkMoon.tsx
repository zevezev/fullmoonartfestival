import styled from "styled-components";
import { Contact } from "../../components/Contact";
import { importAllImagesInFolder } from "../importAllImagesInFolder";
import { Gallery } from "../Gallery";

// Importing all images in the 'assets/images' folder
const images: any[] = importAllImagesInFolder(
  require.context("./", false, /\.(png|jpe?g)$/)
);

export const PinkMoon = () => {
  // TODO: documentation
  //also improve this copy
  return (
    <Pink>
      <div>
        At the Pink Moon, we gathered at Taylor & Co. Books in Ditmas Park,
        Brooklyn. Participants wrote collaborative poems on sticky notes that
        responded to the sections of the bookstore and each other.
      </div>
      <Gallery images={images} />

      <Contact />
    </Pink>
  );
};
const Pink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    color: rgb(238, 147, 171);
  }
`;
