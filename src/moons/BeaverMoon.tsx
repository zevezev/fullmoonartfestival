import styled from "styled-components";

export const BeaverMoon = () => {
  return (
    <Beaver>
      <p>Beaver Moon is Monday, November 27</p>
      <p>
        The festival will start at 7pm. Details tba. Contact Zev to get
        involved!
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
`;
