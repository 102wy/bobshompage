import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page4 = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <p className="title">
        11월 15일은 애기동산 주민들이 하나되어 선교하는 날입니다. 모두 모여
        애기야님의 말씀을 전하고 선교하여 많은 이들을 구원의 길로 이끕시다.
      </p>
      <br />

      <p>
        * 금일 김광석길 선교행사로 인해 명단 발행업무가 불가능합니다.
        <br />
        그러나 행사진행요원 중에 명단을 가지고 있는 관리자가 있으니 직접 수령은
        가능합니다.
        <br />
        정확한 암구어를 제시하시면 명단을 받을 수 있습니다.
      </p>
      <br />
      {/* <p className="keyword_box">바람곳 - 먁켱이를 비차얘 비매여</p> */}

      <div
        class="m-auto overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
        style={{ width: "30rem", marginTop: "10vh" }}
      >
        <a class="block w-full h-full ">
          <div class="w-full p-4 bg-gray-800 ">
            <p class="font-medium text-indigo-500 text-md font_bold">
              금일의 암구어
            </p>
            <p class="mb-2 text-xl font-medium text-gray-800 text-white text_center">
              바람곳 - 먁켱이를 비차얘 비매여
            </p>
            <p class="font-light text-gray-400 text-gray-300 text-md font_size_12">
              암구어는 정확한 음정이 중요합니다.
            </p>
          </div>
        </a>
      </div>
    </Wrap>
  );
};

export default Page4;

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

  .keyword_box {
    text-align: center;
    margin-top: 10vh;
  }
  .font_size_12 {
    font-size: 12px;
  }
  .font_bold {
    font-weight: bold;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
