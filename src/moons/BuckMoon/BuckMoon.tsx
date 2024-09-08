import styled from "styled-components";
import image from "./IMG_3208.jpg";
export const BuckMoon = () => {
  return (
    <Strawberry>
      <img src={image} />
      <div>July 3 2023, Fort Greene Park</div>
      <div>There was also a clothing swap and modding jam</div>
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
