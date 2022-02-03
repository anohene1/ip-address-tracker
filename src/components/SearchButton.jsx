import styled from "styled-components";

const SearchButton = styled.button`
background-color: black;
  border: none;
  height: 50px;
  width: 10%;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  display: grid;
  place-items: center;
  
  &:hover {
    background-color: hsl(0, 0%, 17%);
  }

  @media (max-width: 549px) {
    width: 50px;
  }
`;

export default SearchButton;