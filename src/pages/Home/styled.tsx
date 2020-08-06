import styled from "styled-components";
import React from "react";

export const Page = styled.div`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 50px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.p`
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 35px;
  line-height: 28px;
`;

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Text = styled.div`
  width: 50%;
  padding: 80px;
  margin-top: 70px;
`;

export const Action = styled.a`
  font-weight: 600;
  border-bottom: 2px dashed #9b9b9b;
  padding-bottom: 4px;
`;

const BackgroundImg = styled.img`
  position: fixed;
  z-index: -1;
  height: 100%;
  right: 0;
`;

export function Background() {
  return <BackgroundImg src="/background.png" />;
}
