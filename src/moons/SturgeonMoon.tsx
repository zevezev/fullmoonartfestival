import styled from "styled-components";
import React from "react";

const images = require.context("../images/sturgeonMoon", true);
const imageList = images.keys().map((image) => images(image));

export const SturgeonMoon = () => {
  return (
    <Sturgeon>
      {imageList.map((image, index) => (
        <img key={index} src={image} alt={`${index}`} />
      ))}
      <p>Hackney Fields London. 1 August 2023</p>
    </Sturgeon>
  );
};
const Sturgeon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  text-align: center;
`;
