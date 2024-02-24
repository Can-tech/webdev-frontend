import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BMIInput = styled.input`
  background-color: #50623a;
  width: 60%;
  color: white;
  font-size: xx-large;
  border: none;
  border-radius: 8px;
  padding: 0.5em 1.2em;
  &::placeholder {
    color: whitesmoke;
  }
  &:hover {
    background-color: #475833;
  }
  cursor: ${(props) => (props.$submit ? "pointer" : "default")};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export default function BMIForm(props) {
  const [formValues, setFormValues] = useState({ height: "", weight: "" });
  function hanldeCalculation() {
    const bmi = formValues.weight / formValues.height ** 2;
    let result = "";
    if (bmi < 18.5) {
      result = "underweight";
    } else if (bmi < 25) {
      result = "normal";
    } else if (bmi < 30) {
      result = "overweight";
    } else {
      result = "obese";
    }
    props.setBmiResult(result);
  }
  return (
    <Wrapper>
      <BMIInput
        placeholder="Height(m)"
        value={formValues.height}
        onChange={(e) =>
          setFormValues((prev) => ({ ...prev, height: e.target.value }))
        }
      />
      <BMIInput
        placeholder="Weight(Kg)"
        value={formValues.weight}
        onChange={(e) =>
          setFormValues((prev) => ({ ...prev, weight: e.target.value }))
        }
      />
      <BMIInput
        type="submit"
        value="Check"
        $submit
        onClick={() => hanldeCalculation()}
      />
      {props.result && (
        <Link to={"/diet"} style={{ color: "white" }}>
          Check out the suggested diet
        </Link>
      )}
    </Wrapper>
  );
}
