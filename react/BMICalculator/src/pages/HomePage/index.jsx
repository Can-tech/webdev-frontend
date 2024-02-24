import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BMIForm from "../../BMIForm";
import BMIResult from "../../BMIResult";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #294b29;
`;
const DividerWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => (props.$withgap ? "110px" : "0px")};
`;
const Header = styled.h1`
  font-size: 60px;
  color: aliceblue;
  font-family: Arial, Helvetica, sans-serif;
`;
function HomePage(props) {
  return (
    <Wrapper>
      <DividerWrapper $withgap>
        <Header>Body Mass Index</Header>
        <BMIForm setBmiResult={props.setBmiResult} result={props.bmiResult} />
      </DividerWrapper>
      <DividerWrapper>
        <BMIResult result={props.bmiResult} />
      </DividerWrapper>
    </Wrapper>
  );
}

export default HomePage;
