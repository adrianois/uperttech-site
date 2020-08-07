import styled from "styled-components";
import React from "react";

export const Page = styled.div`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: min(4vw, 40px);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 5vh;
  }
`;

export const Subtitle = styled.p`
  font-weight: 300;
  font-size: min(1.6vw, 16.5px);
  margin-bottom: 35px;
  line-height: 1.5em;

  @media (max-width: 768px) {
    font-size: 2vh;
  }
`;

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Text = styled.div`
  width: 50%;
  padding: 80px 80px 0 80px;
  background-color: #fffffff2;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  min-width: 500px;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    max-width: unset;
    min-width: unset;
    align-items: center;
    justify-content: start;
    padding: 20vh 40px;
  }
`;

const BackgroundImg = styled.img`
  position: fixed;
  z-index: -1;
  height: 100%;
  right: 0;
`;

export function Background() {
  return <BackgroundImg src="/background.svg" />;
}
