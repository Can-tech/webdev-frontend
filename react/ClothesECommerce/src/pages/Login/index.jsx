import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Layout";

const Wrapper = styled.div`
  margin-top: 90px;
  width: 100vw;
  background-color: #eee;
  min-height: 500px;
  display: flex;
  justify-content: center;
`;
const LoginWrapper = styled.div`
  width: 50%;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #9b4444;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 40px;
`;

const FormInput = styled.input`
  border: none;
  font-size: 25px;
  padding: 0.4em 0.7em;
  border-radius: 10px;
`;

const FormButton = styled.button`
  font-size: 20px;
  border-radius: 5px;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
`;

const Header = styled.h3`
  font-size: x-large;
  text-align: center;
  font-weight: 600;
  color: white;
`;

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const handleLogin = () => {
    localStorage.setItem("user", email);
    setUser(localStorage.getItem("user"));
    navigate("/");
  };
  return (
    <Wrapper>
      <LoginWrapper>
        <FormWrapper>
          <Header>Login</Header>
          <FormInput
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput type="text" placeholder="Password" name="password" />
          <FormButton onClick={handleLogin}>Login</FormButton>
        </FormWrapper>
      </LoginWrapper>
    </Wrapper>
  );
};

export default Login;
