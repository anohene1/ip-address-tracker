import styled from "styled-components";

const Detail = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 80px;
  padding-left: 20px;
  
  &:first-of-type {
    border-left: none;
  }
`;

export default Detail;