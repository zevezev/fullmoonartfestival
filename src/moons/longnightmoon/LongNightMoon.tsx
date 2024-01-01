import styled from "styled-components";
import pic from "../../images/Long Night Moon/IMG_9667.jpg";
import { submissions } from "./LongNightMoonResponses";

export const LongNightMoon = () => {
  console.log(submissions.map((submission) => submission));
  return (
    <Beaver>
      <p>Tuesday, December 26</p>
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
        <h2>Share here!</h2>
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
      {submissions.map((submission: Submission) => (
        <Post submission={submission} />
      ))}
      <p>æææææææææææ</p>
      <img src={pic} alt="" />
    </Beaver>
  );
};
type Submission = {
  timestamp: string;
  email: string;
  name: string;
  location: string;
  artFile: string;
  artLinkOrText: string;
  videoFile?: string;
  otherInfo: string;
  hide: string;
};
const Post = ({ submission }: { submission: Submission }) => {
  return (
    <StyledPost>
      <p>🌑 🌒 🌓 🌔 🌝 🌖 🌗 🌘 🌑</p>
      <br />
      <h2>{submission.name}</h2>
      <p>{submission.location}</p>
      <br />
      {submission.artFile && <img src={submission.artFile} alt="" />}
      {submission.videoFile && (
        <iframe
          src={submission.videoFile}
          title="YouTube video player"
          width="auto"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
      <br />
      <p className="info">{submission.artLinkOrText}</p>
      <p className="info">{submission.otherInfo}</p>
    </StyledPost>
  );
};
const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  .images {
    display: flex;
    img {
      object-fit: contain;
    }
  }
  margin: 16px;
  p {
    margin: 0px;
  }
  h2 {
    color: #f399fd;
    margin: 0px;
  }

  .info {
    text-align: left;
  }
`;
const Beaver = styled.div`
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
`;
