import styled from "styled-components";

const Detail = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 80px;
  padding: 0 20px;
  
  
  &:first-of-type {
    border-left: none;
  }
  
  @media (max-width: 549px) {
    min-height: fit-content;
  }
`;

export default Detail;