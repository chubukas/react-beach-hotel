import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

const styledHero = styled.header`
  min-height: calc(60vh);
  background: url(${props => (props.mainImg ? props.mainImg : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default styledHero;
