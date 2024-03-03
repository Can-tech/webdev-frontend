import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  min-height: 400px;
  height: 400px;
`;
const CardWrapper = styled.div`
  background-color: #eee;
  height: 70%;
  font-size: x-large;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 400px;
  width: 40%;
  @media (max-width: 1024px) {
    // Change to column on screens smaller than 768px
    width: 80%;
  }
`;

const ProfilePage = () => {
  const user = localStorage.getItem("user");
  return (
    <Wrapper>
      <CardWrapper>
        <h3>User Logged In:</h3>
        <p>{user}</p>
      </CardWrapper>
    </Wrapper>
  );
};

export default ProfilePage;
