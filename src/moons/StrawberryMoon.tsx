import styled from "styled-components";
import strawberrySuspension from "../images/strawberry_suspension.jpeg";
export const StrawberryMoon = () => {
  return (
    <Strawberry>
      <div
        style={{
          textAlign: "center",
          fontSize: "36px",
          color: "rgb(238, 147, 171)",
        }}
      >
        Full Moon Art Festival: Strawberry Moon
      </div>
      <img
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        src={strawberrySuspension}
        alt="strawberry suspension"
      />
      <br />
      <div>Time: June 4, 7pm - Sundown</div>
      <div>
        Location: Buena Vista Park, San Francisco. Meet at the East entrance at
        Buena Vista Ave E and Duboce Ave.&nbsp;
        <a
          href="https://goo.gl/maps/nDuZPiBAwxNyDjYs9"
          target="_blank"
          rel="noreferrer"
        >
          Click here to see on the map!
        </a>
      </div>
      <div>
        If you're running late, come meet us at the&nbsp;
        <a href="https://goo.gl/maps/CEhWwhfcgRZPDMECA">top of the park.</a>
      </div>
      <div>
        This Strawberry Full Moon, we will ascend to the circle at the top of
        San Francisco to do art together! Please bring a fruit and any materials
        you'd like in the space. Dress warmly as it will get cold when the sun
        goes down!
      </div>
      <div>
        This is a time to reflect, revel, reconnect, and meet new friends and
        collaborators.
      </div>
      <div>Contact</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a
          href="https://www.instagram.com/fullmoonartfestival/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        fullmoonartfestival@gmail.com <div>410-599-2336</div>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScWur-y7b9uSxZs4a2ZtlbhSuJ5FSjG-tEGRkRg2jHkHEtFog/viewform?usp=sf_link"
        target="_blank"
        rel="noreferrer"
      >
        Join our email list
      </a>
      <a
        href="https://venmo.com/code?user_id=2072063309250560702&created=1681673599.09571&printed=1"
        target="_blank"
        rel="noreferrer"
      >
        Support the project
      </a>
      <div>
        The Full Moon Art Festival is an ongoing project by&nbsp;
        <a href="https://www.zevizenberg.com/" target="_blank" rel="noreferrer">
          Zev Izenberg
        </a>
        , a painter, software engineer, and collaborative artist based in
        Brooklyn, and their growing community. The Strawberry Moon is the 5th
        Full Moon Art Festival out of 12.
      </div>
      <div>Reach them at zevizenberg@gmail.com</div>
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
