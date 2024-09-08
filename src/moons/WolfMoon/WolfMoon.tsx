import styled from "styled-components";
import { importAllImagesInFolder } from "../importAllImagesInFolder";
import { Contact } from "../../components/Contact";

// Importing all images in the 'assets/images' folder
const mp3s: any[] = importAllImagesInFolder(
  require.context("./", false, /\.(mp3)$/)
);

export const WolfMoon = () => {
  return (
    <Wolf>
      <p>January 25 2024</p>
      <p>
        A musical jam session. At some point we split up into 3 groups and made
        up songs on the theme "Howling at the Moon".
      </p>
      <div className="mp3s">
        {mp3s.map((mp3) => (
          <audio controls>
            <source src={mp3} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        ))}
      </div>
      <p>Only caught the end of the first song in our recording!</p>
      <p>æææææææææææ</p>
      <Contact />
    </Wolf>
  );
};

const Wolf = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #d1d1f7;

  a {
    color: #9a99fd;
    &:hover {
      color: #f399fd;
    }
  }
  .mp3s {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
