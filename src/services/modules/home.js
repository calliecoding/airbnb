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

// 折扣数据
export function getHomeDiscountData(params) {
  return myRequest.get({
    url: "/home/discount",
  });
}

// 热门推荐
export function getHotRecommend(params) {
  return myRequest.get({
    url: "/home/hotrecommenddest",
  });
}
