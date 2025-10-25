import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page5 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  console.log("data", data);

  useEffect(() => {
    let savedData = localStorage.getItem("formList");

    if (!savedData) return;

    try {
      // 1차 파싱
      let parsed = JSON.parse(savedData);

      // 만약 여전히 문자열이면 한 번 더 파싱
      if (typeof parsed === "string") {
        parsed = JSON.parse(parsed);
      }

      setData(parsed);
    } catch (error) {
      console.error("로컬스토리지 파싱 오류:", error);
    }
  }, []);

  return (
    <Wrap>
      <p className="title">입교상담 게시판</p>
      <table>
        <colgroup>
          <col width="30%" />
          <col width="70%" />
        </colgroup>
        <thead>
          <tr>
            <th>등록자</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>애기사랑</td>
            <td>
              <div className="table_title">
                <img
                  src={`${process.env.PUBLIC_URL}/images/lock.png`}
                  alt="비밀글"
                />
                <p>입교 상담 문의 드립니다.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>동산인</td>
            <td>
              <div className="table_title">
                <img
                  src={`${process.env.PUBLIC_URL}/images/lock.png`}
                  alt="비밀글"
                />
                <p>예배는 언제 가능할까요??</p>
              </div>
            </td>
          </tr>
          {data?.map((value) => {
            return (
              <tr>
                <td>{value.user_name}</td>
                <td>{value.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <RegistButton onClick={() => navigate("/page6")}>글쓰기</RegistButton>
    </Wrap>
  );
};

export default Page5;

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
  .table_title {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 30px;
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RegistButton = styled.button`
  position: fixed;
  bottom: 10%;
  right: 10%;
  font-size: 10px;
  font-size: 16px;
  padding: 10px;
`;
