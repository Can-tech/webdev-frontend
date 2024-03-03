import React, { useState } from "react";
import styled from "styled-components";
import carousel1 from "../../assets/1.jpg";
import carousel2 from "../../assets/2.jpg";
import carousel3 from "../../assets/3.jpg";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: red;
  margin-top: 90px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
const StyledSvg = styled.svg`
  width: 50px;
  height: 50px;
  stroke: black;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    stroke: white;
    transform: translateY(-50%) scale(1.2);
  }
`;

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(1);
  function handleCurrentImage(order) {
    setCurrentImage((prev) => {
      let newCurrentImage = prev + order;
      if (newCurrentImage == 4) newCurrentImage = 1;
      if (newCurrentImage == 0) newCurrentImage = 3;
      return newCurrentImage;
    });
  }
  return (
    <CarouselContainer>
      <StyledSvg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
        stroke="#000"
        style={{ left: "40px" }}
        onClick={() => handleCurrentImage(-1)}
      >
        <path
          d="M13 8.5L9.5 12L13 15.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </StyledSvg>
      {currentImage == 1 && <CarouselImage src={carousel1} alt="1" />}
      {currentImage == 2 && <CarouselImage src={carousel2} alt="2" />}
      {currentImage == 3 && <CarouselImage src={carousel3} alt="3" />}
      <StyledSvg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
        stroke="#00000"
        style={{ right: "40px" }}
        onClick={() => handleCurrentImage(1)}
      >
        <path
          d="M11 8.5L14.5 12L11 15.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </StyledSvg>
    </CarouselContainer>
  );
};

export default Carousel;
