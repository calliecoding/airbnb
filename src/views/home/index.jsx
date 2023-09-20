import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner/index.jsx";
import { fetchHomeDataAction } from "@/store/modeules/home";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import SectionTabs from "@/components/section-tabs";

const Home = memo(() => {

  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );
  /** 数据转换 */

  const [name,setName] = useState("广州")
  const tabNames = Object.keys(discountInfo?.dest_list ?? {});
  const tabClickHandle = useCallback(function(index,item){
    setName(item)
  },[])
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
            <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
            <SectionRooms
              roomList={discountInfo?.dest_list?.[name]}
              itemWidth={"33.3%"}
            />
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
