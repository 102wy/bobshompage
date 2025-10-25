import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <img src={`${process.env.PUBLIC_URL}/images/main.png`} alt="애기동산" />
      <ButtonWrap>
        <button onClick={() => navigate("/page5")}>입교상담</button>
        <button onClick={() => navigate("/page1")}>신도동산</button>
      </ButtonWrap>
    </Wrap>
  );
};

export default HomePage;

const Wrap = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 34px;
    padding-top: 50px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
