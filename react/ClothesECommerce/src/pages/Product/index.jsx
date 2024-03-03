import styled from "styled-components";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/Layout";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
  justify-content: space-between;
  width: 80%;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 1em 0;
  margin: 0;
  overflow: hidden;
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
  width: 100%;
  height: auto;
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
  font-size: 34px;
  font-weight: 600;
`;
const Seller = styled.h4`
  font-size: 18px;
  margin-top: 30px;
`;
const Description = styled.p`
  font-size: 16px;
  margin-top: 30px;
`;
const AddCartWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;
const AmountSelectorWrapper = styled.div`
  display: flex;
`;
const AmountButton = styled.button`
  border: none;
  background-color: #c4c4c4;
  padding: 0.8em;
  font-size: large;
  font-weight: 600;
  border-radius: ${(props) => {
    return props.$left ? "10px 0px 0px 10px" : "0px 10px 10px 0px";
  }};
  cursor: pointer;
  &:hover {
    background-color: #ababab;
  }
`;
const AddCartButton = styled.button`
  padding: 1em 2em;
  background-color: #c4c4c4;
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  font-weight: 600;
  border-radius: 10px;
  margin-left: 1em;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ababab;
  }
`;
const LikeButton = styled.button`
  padding: 1em 1.4em;
  background-color: #b8b8b8;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-left: 1em;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ababab;
  }
`;

const Price = styled.div`
  margin-top: 40px;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Product() {
  const [amount, setAmount] = useState(1);
  const [likedProduct, setLikedProduct] = useState({});
  const { id } = useParams();
  const { user, setUser } = useContext(AuthContext);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://65da29f1bcc50200fcdcad5a.mockapi.io/api/v1/clothes/${id}`
      ).then((res) => res.json()),
  });
  useEffect(() => {
    let likedProducts = JSON.parse(localStorage.getItem("likedproducts"));
    setLikedProduct(likedProducts?.find((e) => e.id == id));
  }, []);
  if (isPending) return <Wrapper>Loading...</Wrapper>;

  if (error) return "An error has occurred: " + error.message;

  function handleAmount(amount) {
    setAmount((prev) => {
      if (prev + amount == 0) return prev;
      return prev + amount;
    });
  }

  const handleLikeButton = async () => {
    let likedProducts = JSON.parse(localStorage.getItem("likedproducts"));
    if (!likedProducts) {
      localStorage.setItem("likedproducts", JSON.stringify([]));
      likedProducts = JSON.parse(localStorage.getItem("likedproducts"));
    }

    if (likedProduct) {
      setLikedProduct({});
      const newLikedProducts = likedProducts?.filter((e) => e?.id != data?.id);
      localStorage.setItem("likedproducts", JSON.stringify(newLikedProducts));
      // console.log(likedProduct);
    } else {
      await setLikedProduct(data);
      const newLikedProducts = [...likedProducts, data];
      localStorage.setItem("likedproducts", JSON.stringify(newLikedProducts));
    }
  };
  const handleAddCartButton = async () => {
    let cartProducts = JSON.parse(localStorage.getItem("cartproducts"));

    if (!cartProducts) {
      localStorage.setItem("cartproducts", JSON.stringify([]));
      cartProducts = JSON.parse(localStorage.getItem("cartproducts"));
    }
    if (cartProducts.every((e) => e.id != id)) {
      const newCartProducts = [...cartProducts, data];
      localStorage.setItem("cartproducts", JSON.stringify(newCartProducts));
    }

    console.log(localStorage.getItem("cartproducts"));
  };

  return (
    <Wrapper>
      <InnerWrapper>
        {" "}
        <LeftWrapper>
          <StyledImage src={data.image} alt="product image"></StyledImage>
        </LeftWrapper>
        <RightWrapper>
          <RightInnerWrapper>
            <RightHeaderWrapper>
              <StyledProductHeader>{data.name}</StyledProductHeader>
              <div>
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24px"
                  height="24px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </RightHeaderWrapper>
            <Seller>Seller: {data.seller}</Seller>
            <Description>Description: {data.description}</Description>
            <Price>
              <p>{data.price}$</p>
              {user && (
                <LikeButton onClick={() => handleLikeButton()}>
                  {" "}
                  <svg
                    width="32px"
                    height="32px"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill={likedProduct?.id ? "white" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="white"
                  >
                    <path
                      d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </LikeButton>
              )}
            </Price>
            {user && (
              <AddCartWrapper>
                <AmountSelectorWrapper>
                  <AmountButton onClick={() => handleAmount(-1)} $left>
                    -
                  </AmountButton>
                  <input
                    type="text"
                    style={{ width: "40px", fontSize: "20px" }}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                  <AmountButton onClick={() => handleAmount(1)} $right>
                    +
                  </AmountButton>
                </AmountSelectorWrapper>
                <AddCartButton onClick={() => handleAddCartButton()}>
                  Add to Cart
                </AddCartButton>
              </AddCartWrapper>
            )}
            {!user && (
              <AddCartWrapper>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    backgroundColor: "#b4b4b4",
                    color: "black",
                    padding: "0.6em 1.2em",
                    borderRadius: "5px",
                  }}
                >
                  Login to Shop
                </Link>
              </AddCartWrapper>
            )}
          </RightInnerWrapper>
        </RightWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}
