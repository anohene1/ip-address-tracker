import styled from "styled-components";


const SearchField = styled.form`
  max-width: 50%;
  min-width: 400px;
  display: flex;
  margin: 20px auto;

  @media (max-width: 549px) {
    min-width: 100%;
    margin-top: 40px;
  }
`

export default SearchField;