import styled from "styled-components";

const DetailHeading = styled.p`
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  color: hsl(0, 0%, 59%);
  margin: 0;
  
  @media (max-width: 549px) {
    font-size: 11px;
  }
`;

export default DetailHeading;