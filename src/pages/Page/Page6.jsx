import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";

const Page6 = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    user_name: "",
    title: "",
    summary: "",
  });

  const onSubmit = () => {
    if (
      !formValues.user_name.trim() ||
      !formValues.title.trim() ||
      !formValues.summary.trim()
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 기존 로컬스토리지 데이터 불러오기
    const savedData = JSON.parse(localStorage.getItem("formList")) || [];

    // 새 데이터 추가
    const newData = [...savedData, formValues];

    // 다시 저장
    localStorage.setItem("formList", JSON.stringify(newData));

    alert("저장되었습니다!");
    navigate("/page5");
  };

  return (
    <Wrap>
      <p className="title">게시판 글쓰기</p>
      <table>
        <colgroup>
          <col width="30%" />
          <col width="70%" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input
                type="text"
                placeholder="작성자명을 입력해주세요"
                value={formValues.user_name}
                onChange={(e) =>
                  setFormValues({ ...formValues, user_name: e.target.value })
                }
                maxLength={20}
              />
            </th>
            <th>
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                value={formValues.title}
                onChange={(e) =>
                  setFormValues({ ...formValues, title: e.target.value })
                }
                maxLength={30}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <textarea
                name="summary"
                id="summary"
                cols="30"
                rows="10"
                value={formValues.summary}
                onChange={(e) =>
                  setFormValues({ ...formValues, summary: e.target.value })
                }
                maxLength={100}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <ButtonWrap>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <button onClick={() => onSubmit()}>저장하기</button>
      </ButtonWrap>
    </Wrap>
  );
};

export default Page6;

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

  textarea {
    width: 100%;
  }
`;

const ButtonWrap = styled.div`
  position: fixed;
  bottom: 10%;
  right: 10%;

  display: flex;
  gap: 10px;
  align-items: center;

  button {
    font-size: 16px;
    padding: 10px;
  }
`;
