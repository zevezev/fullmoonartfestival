// import { useState } from "react";
import styled from "styled-components";
export const SturgeonMoon = () => {
  // const [email, setEmail] = useState("");
  // const onChangeEmail = (email: string) => {
  //   setEmail(email);
  // };
  // const onSubmitEmail = () => {
  //   //TODO with database: send email to that email, enter the email into my db.
  //   console.log(email);
  // };
  return (
    <Strawberry>
      <div>
        In honor of the Sturgeon Moon, we're doing an online crit. This crit is
        open to anyone. The moon is on August 1, we'll choose the best time that
        works for everyone once you rsvp!
      </div>
      <div>
        Contact Zev if you want to come, either send an email to
        zevizenberg@gmail.com or message me on instagram or facebook!
        {/* <input
          type="email"
          onChange={(e) => onChangeEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmitEmail();
          }}
        ></input>
        <button onClick={onSubmitEmail}>RSVP</button> */}
      </div>
      <div>Contact</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a
          href="https://www.instagram.com/fullmoonartfestival/"
          target="_blank"
        >
          Instagram
        </a>
        fullmoonartfestival@gmail.com <div>410-599-2336</div>
      </div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScWur-y7b9uSxZs4a2ZtlbhSuJ5FSjG-tEGRkRg2jHkHEtFog/viewform?usp=sf_link"
        target="_blank"
      >
        Join our email list
      </a>
      <div>
        The Full Moon Art Festival is an ongoing project by&nbsp;
        <a href="https://www.zevizenberg.com/" target="_blank">
          Zev Izenberg
        </a>
        , a painter, software engineer, and collaborative artist based in
        Brooklyn, and their growing community. The Buck Moon is the 6th Full
        Moon Art Festival out of 12.
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
