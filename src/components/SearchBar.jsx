import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../utils";

const SearchBar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState();

  const onSearch = (e) => {
    let path = ""; // 초기 경로
    let level; // level 변수 선언
    let keywordWithoutSpace = keyword.replace(/\s+/g, ""); // 키워드에서 공백 제거

    if (!keywordWithoutSpace) {
      navigate("/");
      return;
    }

    let isLevelIncluded = false; // Level에 해당하는 단어가 검색어에 포함되어 있는지 여부를 체크하기 위한 변수

    // 검색어에 Level에 있는 단어가 포함되어 있는지 체크
    for (level in utils.Level) {
      if (keywordWithoutSpace.includes(utils.Level[level])) {
        path += `/${keywordWithoutSpace.replace(utils.Level[level], "")}/${
          utils.Level[level]
        }`; // 수정된 부분
        isLevelIncluded = true; // Level에 해당하는 단어가 검색어에 포함되어 있다면 플래그를 설정
        break;
      }
    }

    // Level에 해당하는 단어가 검색어에 포함되어 있지 않다면, 검색어를 경로에 추가
    if (!isLevelIncluded) {
      path += `/${keywordWithoutSpace}`;
    }

    // 검색어가 Level에 있는 단어로 시작하는 경우, 검색어 자체를 경로에 추가
    if (keywordWithoutSpace.startsWith(utils.Level[level])) {
      path += `/${keywordWithoutSpace}`;
    }

    navigate(path);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <Wrap>
      {/* <div className="button-wrap">
        <Serach
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={onSearch}>검색</Button>
      </div> */}
      <div className="home">
        <img
          src={`${process.env.PUBLIC_URL}/images/home.png`}
          alt="홈으로가기"
          onClick={() => navigate("/")}
        />
      </div>
    </Wrap>
  );
};

export default SearchBar;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #020181;
  padding: 10px 5px;
  align-items: center;
  .button-wrap {
    display: flex;
    height: 30px;
  }
  .home {
    background-color: #c0c0c0;
    padding: 3px;
    border-right: 2px solid #3e3e3e;
    border-bottom: 2px solid #3e3e3e;
    border-left: 2px solid #ededed;
    border-top: 2px solid #ededed;
    img {
      height: 30px;
      width: auto;
    }
  }
`;

const Serach = styled.input`
  border-radius: 0;
  border-right: 2px solid #3e3e3e;
  border-bottom: 2px solid #3e3e3e;
  border-left: 2px solid #ededed;
  border-top: 2px solid #ededed;
`;

const Button = styled.button`
  border-radius: 0%;
  background-color: #c0c0c0;
  color: black;
  padding: 0 10px;
`;
