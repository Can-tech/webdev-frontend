import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Layout";

const Wrapper = styled.div`
  display: flex;
  min-height: 300px;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin-top: 90px;
  overflow: hidden;
  background-color: #eee;
  padding-block: 2em;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 1em 0;
  margin: 0;
  overflow: hidden;
  min-height: 200px;
  align-items: center;
  @media (max-width: 1024px) {
    // Change to column on screens smaller than 768px
    flex-direction: column;
  }
`;
const LeftWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  @media (max-width: 1024px) {
    // Change to column on screens smaller than 768px
    width: 100%;
  }
`;

const StyledImage = styled.img`
  flex: 0 0 0;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;

const RightWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  @media (max-width: 1024px) {
    // Change to column on screens smaller than 768px
    width: 100%;
  }
`;
const RightInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 10px;
  padding: 0;
  margin: 1em;
  overflow: hidden;
`;
const RightHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledProductHeader = styled.h2`
  font-size: 28px;
  font-weight: 600;
`;
const Seller = styled.h4`
  font-size: 17px;
  margin-top: 30px;
`;
const Description = styled.p`
  font-size: 16px;
  margin-top: 30px;
`;
const Price = styled.div`
  margin-top: 40px;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikedProductsPage = () => {
  const { user } = useContext(AuthContext);
  const datas = JSON.parse(localStorage.getItem("likedproducts"));
  console.log(datas);

  if (!user)
    return (
      <Wrapper>
        {" "}
        <InnerWrapper>
          <div
            style={{
              fontSize: "25px",
            }}
          >
            Log In to save your products!
          </div>
        </InnerWrapper>
      </Wrapper>
    );
  return (
    <Wrapper>
      {datas.length == 0 && <h3>No Item Found</h3>}
      {datas?.map((data, i) => (
        <InnerWrapper key={i}>
          {" "}
          <LeftWrapper>
            <StyledImage src={data.image} alt="product image"></StyledImage>
          </LeftWrapper>
          <RightWrapper>
            <RightInnerWrapper>
              <RightHeaderWrapper>
                <StyledProductHeader>{data.name}</StyledProductHeader>
              </RightHeaderWrapper>
              <Seller>Seller: {data.seller}</Seller>
              <Description>Description: {data.description}</Description>
              <Price>
                <p>{data.price}$</p>
              </Price>
            </RightInnerWrapper>
          </RightWrapper>
        </InnerWrapper>
      ))}
    </Wrapper>
  );
};

export default LikedProductsPage;
