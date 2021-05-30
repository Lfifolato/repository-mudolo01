import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff7;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  padding-left: 24%;
`;

export const Title = styled.h1`
  font-size: 75px;
  padding-top: 35px;
  text-align: center;
  justify-items: center;
  color: #9400d3;
`;

export const ContainerRepo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;
export const Image = styled.img.attrs(() => ({
  src: "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
}))`
  width: 200px;
`;
