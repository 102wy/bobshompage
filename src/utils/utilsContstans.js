export const Level = {
  0: "COFFEE",
  1: "RED",
  2: "BLUE",
  3: "GREEN",
};

// URL keyword -> 숫자 레벨로 변환
export const keywordToIndex = (keyword) => {
  // Level에서 value가 keyword와 같은 key 찾기
  const entry = Object.entries(Level).find(
    ([, value]) => value.toUpperCase() === keyword.toUpperCase()
  );
  return entry ? Number(entry[0]) : 0; // 없으면 기본 0
};

export const keywordDecode = (key) => {
  const keyword = key;
  const regex = /\/([^/]+)\//;
  const match = keyword && keyword?.match(regex);
  const extracted = match && match[1];

  // 만약 '/'가 포함되어 있지 않은 경우에는 전체 keyword를 반환
  if (!extracted) {
    return decodeURI(keyword?.replace(/\//g, ""));
  }

  return extracted ? decodeURI(extracted) : "";
};
