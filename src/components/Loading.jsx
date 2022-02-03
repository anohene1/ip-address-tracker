import styled from "styled-components";

const LoadingContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

function Loading() {
    return (
      <LoadingContainer>
          <h2>Loading...</h2>
      </LoadingContainer>
    );
}

export default Loading;