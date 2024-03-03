import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #9b4444;
  padding-bottom: 5em;
  padding-top: 3em;
  color: white;
`;
const InnerWrapper = styled.div`
  width: 90%;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.p`
  font-size: xx-large;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const RightListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: large;
`;
const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LeftWrapper>
          <Logo>Clothhy</Logo>
          <p style={{ marginTop: "10px" }}>All Rights Reserved</p>
          <p>2024</p>
        </LeftWrapper>
        <RightWrapper>
          <RightListWrapper>
            <FooterList>
              <li style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Legal
              </li>
              <li>Terms of use</li>
              <li>Collected information</li>
              <li>Consent Text</li>
            </FooterList>
          </RightListWrapper>
          <RightListWrapper>
            <FooterList>
              <li style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Brands
              </li>
              <li>Louis Vuitton</li>
              <li>Channel</li>
              <li>Nike</li>
              <li>Lacoste</li>
            </FooterList>
          </RightListWrapper>
          <RightListWrapper>
            <FooterList>
              <li style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Categories
              </li>
              <li>T-Shirt</li>
              <li>Dressn</li>
              <li>Shoes</li>
              <li>Coat</li>
            </FooterList>
          </RightListWrapper>
        </RightWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;
