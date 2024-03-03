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

  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-top: 65px;
  background-color: #eee;
  padding: 2em 0em;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
`;
const LeftInnerWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: row;
  gap: 30px;
  width: 60%;
  overflow-y: auto;
  height: 500px;
`;
const LeftCardWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  width: 70%;
  height: 500px;
`;
const RightCardWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  width: 30%;
  height: 500px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 0.5 0;
  min-height: 180px;
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
  width: 180px;
  height: 180px;
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
`;
const RightHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledProductHeader = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;
const Seller = styled.h4`
  font-size: 16px;
  margin-top: 10px;
`;
const Description = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;
const Price = styled.div`
  margin-top: 30px;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// RightSide
const RightInerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 35%;
  min-height: 500px;
  background-color: #e0e0e0;
  border-radius: 8px;

  /* margin-left: 20px; */
`;
const TotalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1em 0em;

  border-radius: 7px;
  width: 90%;
  min-height: 200px;
  gap: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const StyledHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #9b4444;
  color: white;
  border-radius: 6px;
`;

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const StyledCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const StyledBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledOverallSum = styled.p`
  font-size: large;
`;
const StyledChekoutButton = styled.button`
  border: none;
  font-size: 22px;
  background-color: #9b4444;
  border-radius: 7px;
  color: #eee;
  padding: 0.5em 1em;
  cursor: pointer;
  &:hover {
    background-color: #8a3d3d;
  }
`;

const CartPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const datas = JSON.parse(localStorage.getItem("cartproducts"));
  const [overallSum, setOverallSum] = useState();
  useEffect(() => {
    const sum = datas.reduce((acc, curr) => Number(curr.price) + acc, 0);
    setOverallSum(sum);
  }, [datas]);

  const handleRemoveCartItem = (data) => {
    const newItems = datas.filter((e) => e.id != data.id);
    localStorage.setItem("cartproducts", JSON.stringify(newItems));
    navigate(0);
  };

  if (!user)
    return (
      <Wrapper>
        {" "}
        <CardWrapper>
          <div
            style={{
              fontSize: "25px",
            }}
          >
            Log In to save your products!
          </div>
        </CardWrapper>
      </Wrapper>
    );
  return (
    <Wrapper>
      <LeftInnerWrapper>
        <LeftCardWrapper>
          {datas.map((data, i) => (
            <CardWrapper key={i}>
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
            </CardWrapper>
          ))}
        </LeftCardWrapper>
        <RightCardWrapper>
          {datas.map((data, i) => (
            <CardWrapper
              key={i}
              style={{ flexDirection: "column", gap: "30px" }}
            >
              <p>x1</p>
              <StyledChekoutButton
                style={{ fontSize: "18px" }}
                onClick={() => handleRemoveCartItem(data)}
              >
                Remove the Item
              </StyledChekoutButton>
            </CardWrapper>
          ))}
        </RightCardWrapper>
      </LeftInnerWrapper>
      <RightInerWrapper>
        <TotalCardWrapper>
          <h3 style={{ fontSize: "25px" }}>Overall Sum:</h3>
          <StyledTable>
            <thead>
              <tr>
                <StyledHeader style={{ width: "70%" }}>Name</StyledHeader>
                <StyledHeader style={{ width: "30%" }}>Price</StyledHeader>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, i) => (
                <StyledRow key={i}>
                  <StyledCell>{data.name}</StyledCell>
                  <StyledCell>{data.price}</StyledCell>
                </StyledRow>
              ))}
            </tbody>
          </StyledTable>
          <hr />
          <StyledBottomWrapper>
            {" "}
            <StyledOverallSum>Overall Sum: {overallSum}$</StyledOverallSum>
            <StyledChekoutButton>Checkout</StyledChekoutButton>
          </StyledBottomWrapper>
        </TotalCardWrapper>
      </RightInerWrapper>
    </Wrapper>
  );
};

export default CartPage;
