import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner/index.jsx";
import { fetchHomeDataAction } from "@/store/modeules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";

import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObj } from "@/utils";
import HomeLongfor from "./c-cpns/home-longfor";

const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo ,hotRecommendInfo,longforInfo} = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longforInfo:state.home.longforInfo
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
        {isEmptyObj(longforInfo) && <HomeLongfor inforData={longforInfo} />}
        {/* 折扣数据 */}
        {isEmptyObj(discountInfo) && <HomeSectionV2 inforData={discountInfo} />}

         {/* 热门推荐 */}
         {isEmptyObj(hotRecommendInfo) && <HomeSectionV2 inforData={hotRecommendInfo} />}

        {/* 高性价比 */}
        {isEmptyObj(goodPriceInfo) && (
          <HomeSectionV1 inforData={goodPriceInfo} />
        )}

        {/* 高分 */}
        {isEmptyObj(highScoreInfo) && (
          <HomeSectionV1 inforData={highScoreInfo} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
