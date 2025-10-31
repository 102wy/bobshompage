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

      <div class="container max-w-3xl mx-auto sm:px-8">
        <div class="py-4">
          <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      등록자
                    </th>
                    <th
                      scope="col"
                      class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      제목
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div class="">
                        <div class="flex-shrink-0">애기사랑</div>
                        <div class="">
                          <p class="text-gray-900 whitespace-no-wrap"></p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <FlexBox>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/lock.png`}
                          alt="비밀글"
                          style={{ width: "20px" }}
                        />
                        <p class="text-gray-900 whitespace-no-wrap">
                          입교 상담 문의 드립니다.
                        </p>
                      </FlexBox>
                    </td>
                  </tr>

                  <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <a class="relative block"></a>
                        </div>
                        <div class="">
                          <p class="text-gray-900 whitespace-no-wrap">동산인</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">
                        <FlexBox>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/lock.png`}
                            alt="비밀글"
                            style={{ width: "20px" }}
                          />
                          <p class="text-gray-900 whitespace-no-wrap">
                            예배는 언제 가능할까요??
                          </p>
                        </FlexBox>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <a class="relative block"></a>
                        </div>
                        <div class="">
                          <p class="text-gray-900 whitespace-no-wrap">도후니</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p class="text-gray-900 whitespace-no-wrap">
                        <FlexBox>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/lock.png`}
                            alt="비밀글"
                            style={{ width: "20px" }}
                          />
                          <p class="text-gray-900 whitespace-no-wrap">
                            가입인사드려요.
                          </p>
                        </FlexBox>
                      </p>
                    </td>
                  </tr>
                  {data?.map((value) => {
                    return (
                      <tr>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a class="relative block"></a>
                            </div>
                            <div class="">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {value.user_name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p class="text-gray-900 whitespace-no-wrap">
                            <FlexBox>
                              <img
                                src={`${process.env.PUBLIC_URL}/images/lock.png`}
                                alt="비밀글"
                                style={{ width: "20px" }}
                              />
                              <p class="text-gray-900 whitespace-no-wrap">
                                {value.title}
                              </p>
                            </FlexBox>
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <table>
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
      </table> */}
      <button
        type="button"
        class="py-2 px-4  bg-gray-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        onClick={() => navigate("/page6")}
      >
        글쓰기
      </button>
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
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
