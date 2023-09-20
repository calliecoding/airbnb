import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";


import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner/index.jsx";
import { fetchHomeDataAction } from "@/store/modeules/home";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

const Home = memo(() => {
  //   const [highScore, setHighScore] = useState({});

  /** 从redux中获取数据 */
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
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
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <ul className="room-list">
            {goodPriceInfo.list?.slice(0,8).map((item) => {
              return <RoomItem key={item.id} itemData={item} />;
            })}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
