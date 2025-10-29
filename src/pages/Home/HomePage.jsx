import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <img
        src={`${process.env.PUBLIC_URL}/images/main.png`}
        alt="애기동산"
        className="main_img"
      />
      <ButtonWrap>
        <button
          type="button"
          class="py-2 px-4  dark:bg-gray-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          onClick={() => navigate("/page5")}
        >
          입교상담
        </button>
        <button
          type="button"
          class="py-2 px-4  dark:bg-gray-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          onClick={() => navigate("/page1")}
        >
          신도동산
        </button>
      </ButtonWrap>
    </Wrap>
  );
};

export default HomePage;

const Wrap = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 34px;
    padding-top: 50px;
  }
  .main_img {
    max-width: 250px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
