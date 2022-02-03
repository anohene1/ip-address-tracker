import styled from "styled-components";

const DetailsContainer = styled.div`
  width: 80%;
  height: 170px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 5px 90px rgba(0, 0, 0, 0.2);
  padding: 30px 0;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  margin: -75px auto 0;
`;

export default DetailsContainer;