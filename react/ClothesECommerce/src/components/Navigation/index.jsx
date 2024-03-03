import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import searchImg from "../../assets/searchengine.svg";
import { useEffect, useState } from "react";
import React, { createContext, useContext } from "react";
import { AuthContext } from "../Layout";

const OuterWrapper = styled.div`
  width: 100vw;
  height: 75px;
  background-color: #9b4444;
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  position: fixed;
  z-index: 999;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: xx-large;
  color: #eeeeee;
  text-decoration: none;
`;
const SearchBar = styled.input`
  font-size: large;
  padding: 0.5em 1em;
  width: 500px;
  border-radius: 5px;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  background-image: url(${(props) => props.searchImg});
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: 5px center;
  padding-left: 50px; // Adjust this value to ensure text does not overlap the image
`;
const RightMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 30px;
`;
const RightMenuItemWrapper = styled.div`
  &:hover {
    stroke: black;
  }
`;
const StyledSvg = styled.svg`
  border-radius: 20px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default function Navigation() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(localStorage.getItem("user"));
    navigate("/");
  };
  return (
    <OuterWrapper>
      <Wrapper>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Logo>Clothhy</Logo>
        </Link>
        <SearchBar searchImg={searchImg} />

        {user && (
          <RightMenu>
            <RightMenuItemWrapper onClick={() => navigate("/cart")}>
              <StyledSvg
                width="32px"
                height="32px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#EEEEEE"
              >
                <path
                  d="M19.5 22C20.3284 22 21 21.3284 21 20.5C21 19.6716 20.3284 19 19.5 19C18.6716 19 18 19.6716 18 20.5C18 21.3284 18.6716 22 19.5 22Z"
                  fill="#EEEEEE"
                  stroke="#EEEEEE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.5 22C10.3284 22 11 21.3284 11 20.5C11 19.6716 10.3284 19 9.5 19C8.67157 19 8 19.6716 8 20.5C8 21.3284 8.67157 22 9.5 22Z"
                  fill="#EEEEEE"
                  stroke="#EEEEEE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5 4H22L20 15H7L5 4ZM5 4C4.83333 3.33333 4 2 2 2"
                  stroke="#EEEEEE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M20 15H7H5.23077C3.44646 15 2.5 15.7812 2.5 17C2.5 18.2188 3.44646 19 5.23077 19H19.5"
                  stroke="#EEEEEE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </StyledSvg>
            </RightMenuItemWrapper>
            <RightMenuItemWrapper onClick={() => navigate("/likedproducts")}>
              <StyledSvg
                width="32px"
                height="32px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="white"
              >
                <path
                  d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </StyledSvg>
            </RightMenuItemWrapper>
            <RightMenuItemWrapper onClick={() => navigate("/profile")}>
              <StyledSvg
                width="32px"
                height="32px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#EEEEEE"
              >
                <path
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                  stroke="#EEEEEE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
                  stroke="#EEEEEE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                  stroke="#EEEEEE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </StyledSvg>
            </RightMenuItemWrapper>
            <RightMenuItemWrapper onClick={() => handleLogout()}>
              <StyledSvg
                width="32px"
                height="32px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#EEEEEE"
              >
                <path
                  d="M12 12H19M19 12L16 15M19 12L16 9"
                  stroke="#EEEEEE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18"
                  stroke="#EEEEEE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </StyledSvg>
            </RightMenuItemWrapper>
          </RightMenu>
        )}
        {!user && (
          <RightMenu>
            <RightMenuItemWrapper onClick={() => navigate("/login")}>
              <StyledSvg
                width="32px"
                height="32px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#fff"
                stroke="#fff"
              >
                <path
                  d="M19 12H12M12 12L15 15M12 12L15 9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </StyledSvg>
            </RightMenuItemWrapper>
          </RightMenu>
        )}
      </Wrapper>
    </OuterWrapper>
  );
}
