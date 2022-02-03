import styled from "styled-components";

const TextInput = styled.input`
  height: 50px;
  width: 90%;
  background-color: white;
  border: none;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  text-indent: 10px;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: hsl(0, 0%, 59%);

  @media (max-width: 549px) {
    width: calc(100% - 50px);
  }
`;

export default TextInput;