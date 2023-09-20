import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner/index.jsx";
import { fetchHomeDataAction } from "@/store/modeules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";

import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObj } from "@/utils";
import HomeLongfor from "./c-cpns/home-longfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";

const Home = memo(() => {
  /** 从redux中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );
  /** 数据转换 */

  /** 派发异步事件：发送网络请求 */
  const dispatch = useDispatch();

  /** dispatch 副作用 */
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣数据 */}
        {isEmptyObj(discountInfo) && <HomeSectionV2 inforData={discountInfo} />}

        {/* 热门推荐 */}
        {isEmptyObj(hotRecommendInfo) && (
          <HomeSectionV2 inforData={hotRecommendInfo} />
        )}
        {/* 向往城市 */}
        {isEmptyObj(longforInfo) && <HomeLongfor inforData={longforInfo} />}

        {/* 高性价比 */}
        {isEmptyObj(goodPriceInfo) && (
          <HomeSectionV1 inforData={goodPriceInfo} />
        )}

        {/* 高分 */}
        {isEmptyObj(highScoreInfo) && (
          <HomeSectionV1 inforData={highScoreInfo} />
        )}
        {/* 高分 */}
        {isEmptyObj(plusInfo) && <HomeSectionV3 inforData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
