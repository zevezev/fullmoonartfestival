import { useQuery } from "convex/react";
import { api } from "./convex/_generated/api";

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
  const moonMessages = useQuery(api.moonMessages.get);

  return (
    <div>
      {moonMessages?.map(({ _id, message, author }) => (
        <div key={_id}>
          {message} - {author}
        </div>
      ))}
      <h1>Leave a message!</h1>
    </div>
  );
};
