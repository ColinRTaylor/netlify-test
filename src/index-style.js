import image from "./image.jpg";
import styled from "styled-components";
const colors = {
  white: "#fff"
};
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Inner = styled.div`
  width: 20%;
  margin-top: 15vh;
  padding: 3vh 0;
  color: white;
  text-align: center;
  word-wrap: normal;
`;

export const Top = styled.div`
  border-bottom: 1px solid white;
  margin: 3vh 0;
`;

export const Nav = styled.nav`
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  position: fixed;
  height: 48px;
  background: ${colors.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  overflow: auto;
  background: ${colors.white};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px;
`;
