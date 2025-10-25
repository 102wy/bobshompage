import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page3 = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <p className="title">
        11월 15일은 애기동산 주민들이 하나되어 선교하는 날입니다. 모두 모여
        애기야님의 말씀을 전하고 선교하여 많은 이들을 구원의 길로 이끕시다.
      </p>
      <p>* 행사진행으로 인해 홈페이지 이용이 일부 제한됩니다.</p>

      <button onClick={() => navigate("/page4")}>애기동산 간부명단</button>
    </Wrap>
  );
};

export default Page3;

const Wrap = styled.div`
  padding: 20px;
  h2 {
    text-align: center;
    font-size: 24px;
  }
  p.title {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
