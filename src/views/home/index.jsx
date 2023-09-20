import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner/index.jsx";
import { fetchHomeDataAction } from "@/store/modeules/home";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  //   const [highScore, setHighScore] = useState({});

  /** 从redux中获取数据 */
  const { goodPriceInfo ,highScoreInfo} = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo:state.home.highScoreInfo
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
        {/* 高性价比 */}
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
        {/* 高分 */}
        <div className="high-score">
          <SectionHeader title={highScoreInfo.title}  subtitle={highScoreInfo.subtitle}/>
          <SectionRooms roomList={highScoreInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
