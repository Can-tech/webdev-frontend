import styled from "styled-components";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
