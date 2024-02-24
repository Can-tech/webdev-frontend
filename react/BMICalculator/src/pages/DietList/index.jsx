import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BMIForm from "../../BMIForm";
import BMIResult from "../../BMIResult";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #294b29;
`;
const Header = styled.h1`
  font-size: 60px;
  color: aliceblue;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
`;
const RecipeBox = styled.div`
  width: 700px;
  min-height: 500px;
  background-color: #50623a;
  margin-top: 30px;
  border-radius: 30px;
  padding: 2em;
  color: wheat;
`;
const UnOrderedList = styled.ul`
  list-style: circle;
`;
const ListElement = styled.li`
  font-size: large;
`;
function DietList(props) {
  console.log(props);
  return (
    <Wrapper>
      <Header>This is your suggested diet recipe!</Header>
      <RecipeBox>
        <UnOrderedList>
          {props.bmiResult == "underweight" && (
            <ListElement>Eat something!</ListElement>
          )}
          {props.bmiResult == "normal" && (
            <ListElement>Do what you do you are OK!</ListElement>
          )}
          {props.bmiResult == "overweight" && (
            <ListElement>East Less pls!</ListElement>
          )}
          {props.bmiResult == "obese" && (
            <ListElement>Eat nothing! Thx</ListElement>
          )}
        </UnOrderedList>
      </RecipeBox>
    </Wrapper>
  );
}

export default DietList;
