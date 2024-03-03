import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";

export const AuthContext = createContext();

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default function Layout() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Wrapper>
        <Navigation></Navigation>
        <Outlet />
        <Footer />
      </Wrapper>
    </AuthContext.Provider>
  );
}
