import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../../utils";
import { FlexBox } from "./Page5";

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
    // <Wrap>
    //   <p className="title">게시판 글쓰기</p>
    //   <table>
    //     <colgroup>
    //       <col width="30%" />
    //       <col width="70%" />
    //     </colgroup>
    //     <thead>
    //       <tr>
    //         <th>
    //           <input
    //             type="text"
    //             placeholder="작성자명을 입력해주세요"
    //             value={formValues.user_name}
    //             onChange={(e) =>
    //               setFormValues({ ...formValues, user_name: e.target.value })
    //             }
    //             maxLength={20}
    //           />
    //         </th>
    //         <th>
    //           <input
    //             type="text"
    //             placeholder="제목을 입력해주세요"
    //             value={formValues.title}
    //             onChange={(e) =>
    //               setFormValues({ ...formValues, title: e.target.value })
    //             }
    //             maxLength={30}
    //           />
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td colSpan={2}>
    //           <textarea
    //             name="summary"
    //             id="summary"
    //             cols="30"
    //             rows="10"
    //             value={formValues.summary}
    //             onChange={(e) =>
    //               setFormValues({ ...formValues, summary: e.target.value })
    //             }
    //             maxLength={100}
    //           ></textarea>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    //   <ButtonWrap>
    //     <button onClick={() => navigate(-1)}>뒤로가기</button>
    //     <button onClick={() => onSubmit()}>저장하기</button>
    //   </ButtonWrap>
    // </Wrap>

    <React.Fragment>
      <div class="container max-w-3xl mx-auto sm:px-8">
        <div class="py-4">
          <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table class="min-w-full leading-normal">
                <colgroup>
                  <col width="70%" />
                  <col width="30%" />
                </colgroup>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      <div class=" relative ">
                        <label for="name-with-label" class="text-gray-700">
                          제목
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          name="email"
                          placeholder="제목을 입력하세요"
                        />
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      <div class=" relative ">
                        <label for="name-with-label" class="text-gray-700">
                          작성자
                        </label>
                        <input
                          type="text"
                          id="name-with-label"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          name="email"
                          placeholder="작성자"
                        />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                      colSpan={2}
                    >
                      <label class="text-gray-700" for="name">
                        <textarea
                          class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          id="comment"
                          placeholder="내용을 입력하세요."
                          name="comment"
                          rows="5"
                          cols="40"
                        ></textarea>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ButtonWrap>
        <button
          type="button"
          class="py-2 px-5 bg-gray-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          onClick={() => navigate(-1)}
        >
          뒤로가기
        </button>
        <button
          type="button"
          class="py-2 px-4 bg-gray-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          onClick={onSubmit}
        >
          저장하기
        </button>
      </ButtonWrap>
    </React.Fragment>
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
