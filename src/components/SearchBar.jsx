import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import * as utils from "../utils";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav class="bg-white dark:bg-gray-800  ">
        <div class="px-8 mx-auto max-w-7xl">
          <div class="flex items-center justify-between h-16">
            <div class=" flex items-center">
              <a class="flex-shrink-0" href="/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/home.png`}
                  alt="메인으로가기"
                  style={{ width: "35px" }}
                />
              </a>
              <div class="hidden md:block">
                <div class="flex items-baseline ml-10 space-x-4"></div>
              </div>
            </div>
            <div class="block">
              <div class="flex items-center ml-4 md:ml-6"></div>
            </div>
            {/* <div class="flex -mr-2 md:hidden">
              <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div> */}
          </div>
        </div>
        {/* <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3"></div>
        </div> */}
      </nav>
    </div>
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
