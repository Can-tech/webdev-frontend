import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em 0;
  width: 15%;
  min-width: 250px;
  background-color: #9b4444;
  display: flex;
  justify-content: center;
  min-height: 600px;
  max-height: 700px;
  margin: 0 0 0 1em;
  border-radius: 7px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
`;
const InnerWrapper = styled.div`
  width: 90%;
  margin: 0.2em 1.5em;
`;
const FilterGroup = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;
const FilterHeading = styled.h2`
  font-size: 20px;
  color: white;
`;
const FilterLabel = styled.label`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 7px;
`;
const FilterInput = styled.input`
  padding: 1.3em;
  width: 20px;
  height: 20px;
  border-radius: 100px;
`;
export default function HomePageFilters() {
  return (
    <Wrapper>
      <InnerWrapper>
        <FilterGroup>
          <FilterHeading>Categories</FilterHeading>
          <FilterLabel>
            <FilterInput type="checkbox" name="some"></FilterInput>
            T-Shirt
          </FilterLabel>
          <FilterLabel>
            <FilterInput type="checkbox" name="some"></FilterInput>
            Dress
          </FilterLabel>
          <FilterLabel>
            <FilterInput type="checkbox" name="some"></FilterInput>
            Shoes
          </FilterLabel>
          <FilterLabel>
            <FilterInput type="checkbox" name="some"></FilterInput>
            Coat
          </FilterLabel>
        </FilterGroup>
        <FilterGroup>
          <FilterHeading>Brands</FilterHeading>
          <FilterLabel>
            <FilterInput type="checkbox" name="some"></FilterInput>
            Luis Vuittion
          </FilterLabel>
          <FilterLabel>
            <FilterInput type="checkbox" name="some"></FilterInput>
            Channel
          </FilterLabel>
          <FilterLabel>
            <FilterInput type="checkbox" name="some"></FilterInput>
            Nike
          </FilterLabel>
          <FilterLabel>
            <FilterInput type="checkbox" name="some"></FilterInput>
            Lacoste
          </FilterLabel>
        </FilterGroup>
      </InnerWrapper>
    </Wrapper>
  );
}
