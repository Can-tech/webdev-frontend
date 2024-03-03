import React from "react";
import styled from "styled-components";

import Carousel from "../../components/Carousel";
import HomePageFilters from "../../components/HomePageFilters";
import HomePageProducts from "../../components/HomePageProducts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductsHeader = styled.p`
  font-size: 40px;
  color: black;
  text-align: center;
  margin-top: 30px;
  font-family: "Inika", serif;
  font-weight: 400;
  font-style: normal;
`;
const ProductsWrapper = styled.div`
  width: 100vw;
  background-color: #eeeeee;
`;
const ProductsInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 30px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Carousel />
      <ProductsWrapper>
        <ProductsHeader>Products</ProductsHeader>
        <ProductsInnerWrapper>
          <HomePageFilters />
          <HomePageProducts />
        </ProductsInnerWrapper>
      </ProductsWrapper>
    </Wrapper>
  );
};

export default HomePage;
