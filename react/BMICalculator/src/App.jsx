import { useEffect, useState } from "react";
import styled from "styled-components";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DietList from "./pages/DietList";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";

function App() {
  const [bmiResult, setBmiResult] = useState(() => {
    const data = localStorage.getItem("result");
    return data;
  });
  useEffect(() => {
    localStorage.setItem("result", bmiResult);
  }, [bmiResult]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <HomePageWithProps
              bmiResult={bmiResult}
              setBmiResult={setBmiResult}
            />
          }
        />
        <Route
          path="diet"
          element={
            <DietListWithProps
              bmiResult={bmiResult}
              setBmiResult={setBmiResult}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

function HomePageWithProps({ bmiResult, setBmiResult }) {
  return <HomePage bmiResult={bmiResult} setBmiResult={setBmiResult} />;
}

function DietListWithProps({ bmiResult, setBmiResult }) {
  return <DietList bmiResult={bmiResult} setBmiResult={setBmiResult} />;
}
