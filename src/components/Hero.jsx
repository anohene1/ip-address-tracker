import heroImage from '../images/pattern-bg.png';
import styled from "styled-components";

const Hero = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  width: 100vw;
  height: 250px;
  text-align: center;
  padding: 20px;
  
  @media (max-width: 549px) {
    height: 320px;
  }
`

export default Hero;