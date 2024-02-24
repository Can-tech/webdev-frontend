import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
`;

export default function NotFound() {
  return <Wrapper>404 Not Found</Wrapper>;
}
