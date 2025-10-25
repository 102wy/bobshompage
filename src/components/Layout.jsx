import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";
import styled from "styled-components";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Wrap>
      <Contents>
        {pathname !== "/" && <SearchBar />}
        <Outlet />
      </Contents>
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  width: 100%;
  max-width: 768px; // 모바일 최대 크기
  height: 100%;
  min-height: 100vh;
`;
