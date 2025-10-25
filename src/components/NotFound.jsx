import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <p>잘못된 검색어 입니다.</p>

      <button onClick={() => navigate(-1)}>돌아가기</button>
    </Wrap>
  );
};

export default NotFound;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  padding-top: 50px;
  flex-direction: column;
  gap: 30px;
`;
