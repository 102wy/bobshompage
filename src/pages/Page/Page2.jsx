import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page2 = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const onSubmit = () => {
    const Nkeyword = keyword.replace(/\s+/g, ""); //공백제거

    if (Nkeyword === "새나라주민") {
      navigate("/page3");
    } else {
      alert("간부가 아니시군요");
      return;
    }
  };

  return (
    <Wrap>
      <p className="title">
        애기동산에서 간부급 신도를 뜻하는 단어는 무엇입니까?
      </p>
      <ButtonWrap>
        <input
          type="text"
          value={keyword}
          maxLength={20}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? onSubmit() : null)}
        />
        <button onClick={onSubmit}>검색</button>
      </ButtonWrap>
    </Wrap>
  );
};

export default Page2;

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
