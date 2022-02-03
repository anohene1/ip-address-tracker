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

  @media (max-width: 549px) {
    width: 50px;
  }
`;

export default SearchButton;