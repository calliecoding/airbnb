import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner/index.jsx";
import { fetchHomeDataAction } from "@/store/modeules/home";
import SectionHeader from "@/components/section-header";

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
          <SectionHeader title={goodPriceInfo.title}/>
          <ul>
            {goodPriceInfo.list?.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
