import styled from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  padding-bottom: 4em;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export default function HomePageProducts() {
  const { isPending, error, data } = useQuery({
    queryKey: ["allProducts"],
    queryFn: () =>
      fetch("https://65da29f1bcc50200fcdcad5a.mockapi.io/api/v1/clothes").then(
        (res) => res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <ProductsWrapper>
        {data?.map((e, i) => (
          <Product key={i} data={e} />
        ))}
      </ProductsWrapper>
    </>
  );
}

const StyledProductWrapper = styled(Link)`
  height: 330px;
  width: 250px;
  background-color: #f8f8f8;
  border: #fff5e3 solid 3px;
  border-radius: 10px;
  color: black;
`;
const ImageWrapper = styled.div`
  height: 240px;
  width: 250px;
  display: flex;
  justify-content: center;
`;
const ProductText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1em;
`;

function Product({ data }) {
  return (
    <StyledProductWrapper to={`/products/${data.id}`}>
      <ImageWrapper>
        <img
          src={data.image}
          alt="product"
          style={{ width: "90%", height: "100%", objectFit: "cover" }}
        />
      </ImageWrapper>
      <ProductText>
        <p>{data.name}</p>
        <p style={{ fontSize: "20px" }}>{data.price}$</p>
      </ProductText>
    </StyledProductWrapper>
  );
}
