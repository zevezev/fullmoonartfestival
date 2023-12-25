import styled from "styled-components";
import pic from "../images/Long Night Moon/IMG_9771.jpeg";
export const LongNightMoon = () => {
  return (
    <Beaver>
      <p>Tuesday, December 26</p>
      <img src={pic} />
      <p>
        This moon, many of us away from NYC. So instead of a big physical
        gathering, you're invited to do art wherever you are. What you share
        here may be displayed on this page and will be shared in future
        gatherings!
      </p>
      <a
        href="https://forms.gle/3vaqKTbHcdwwwEqg6"
        rel="noreferrer"
        target="_blank"
      >
        <h3>Share here!</h3>
      </a>
      <p>
        Please share something you made/mended/wrote/found/danced/played in the
        long nights (or short days) of this Full Moon! This form is open until
        the end of the year.
      </p>

      <p>
        The{" "}
        <a
          href="https://www.almanac.com/full-moon-december"
          target="_blank"
          rel="noreferrer"
        >
          Mohican name for this moon is the Long Night Moon
        </a>
        , because it takes place on the longest full moon night of the year.
        This page was written on stolen Lenape land.
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
  color: #d1d1f7;
  a {
    color: #9a99fd;
  }
`;
