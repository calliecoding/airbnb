import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner/index.jsx";
import { fetchHomeDataAction } from "@/store/modeules/home";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import HomeSectionV1 from "./c-cpns/home-section-v1";

const Home = memo(() => {
  //   const [highScore, setHighScore] = useState({});

  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );

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

        {discountInfo && (
          <div className="discount">
            <SectionHeader
              title={discountInfo.title}
              subtitle={discountInfo.subtitle}
            />

            <SectionRooms roomList={discountInfo?.dest_list?.["广州"]} itemWidth={"33.3%"}/>
          </div>
        )}

        {/* 高性价比 */}
        <HomeSectionV1 inforData={goodPriceInfo} />
        {/* 高分 */}
        <HomeSectionV1 inforData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
