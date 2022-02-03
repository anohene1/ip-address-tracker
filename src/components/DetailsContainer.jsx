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
  margin: 0 auto;
  position: absolute;
  top: 180px;
  left: 0;
  right: 0;
  z-index: 3;
`;

export default DetailsContainer;