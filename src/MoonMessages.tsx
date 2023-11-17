import { useMutation, useQuery } from "convex/react";
import { api } from "./convex/_generated/api";
import { useState } from "react";
import styled from "styled-components";

export const MoonMessages = () => {
  /*
    MoonMessages is the home page of full moon art festival. 
    It invites users to write a message, a poem, a memory, anything, about/for/on looking upon the moon.
    Each message becomes a star in the starfield. when users click a star, they see that message.
    The stars appear in a random location.
    The starts are a random size, number of points, color from a set of colors,
    and ideally a noised shape too.
    Use p5 for the visuals, react for the reader and comment interface, and Convex for the data.
    
    It also needs a Moon Menu with (next moon info)
    */
  const [message, setMessage] = useState({ message: "", author: "" });
  const createMoonMessage = useMutation(api.functions.createMoonMessage);

  const moonMessages = useQuery(api.moonMessages.get);

  return (
    <div>
      <StyledStarContainer>
        {moonMessages?.map(({ _id, message, author }) => (
          <StyledStar key={_id}>
            {message}
            {author && (
              <div>
                <br />- {author}
              </div>
            )}
          </StyledStar>
        ))}
      </StyledStarContainer>
      <h1>Leave a message!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (message.message) {
            createMoonMessage(message);
            setMessage({ message: "", author: "" });
          }
        }}
      >
        <input
          type="text"
          placeholder="Message"
          onChange={(e) => {
            setMessage({ message: e.target.value, author: message.author });
          }}
          value={message.message}
        />
        <input
          type="text"
          placeholder="Author (optional)"
          onChange={(e) => {
            setMessage({ message: message.message, author: e.target.value });
          }}
          value={message.author}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

const StyledStar = styled.div`
  background: white;
  padding: 24px;
  color: black;
  border-radius: 40%;
  justify-content: center;
  display: flex;
  width: fit-content;
  flex-direction: column;
`;
const StyledStarContainer = styled.div`
  display: flex;
  justify-content: spaced-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 18px;
`;
