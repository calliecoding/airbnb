import myRequest from "..";

// 高性价比数据
export function getHomeGoodPriceData(params) {
  return myRequest.get({
    url: "/home/goodprice",
  });
}

// 高评分数据
export function getHomeHighScoreData(params) {
  return myRequest.get({
    url: "/home/highscore",
  });
}
