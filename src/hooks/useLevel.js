import React from "react";
import { useParams } from "react-router-dom";
import { Level } from "../utils"; // Level 객체 import

export const useLevel = () => {
  // URL에서 keyword와 levelName 추출
  const { keyword, levelName } = useParams();

  // Level 이름 → 숫자 매핑
  const levelNameToNumber = React.useMemo(() => {
    return Object.fromEntries(
      Object.entries(Level).map(([num, name]) => [name, Number(num)])
    );
  }, []);

  const keywordLevel = levelName ? levelNameToNumber[levelName] : 0;

  return { keyword, levelName, keywordLevel };
};
