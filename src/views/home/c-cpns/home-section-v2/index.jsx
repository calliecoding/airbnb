import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";

import { SectionV2Warpper } from "./style";
import SectionTabs from "@/components/section-tabs";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
const HomeSectionV2 = memo((props) => {
  const { inforData } = props;

  /** 定义内部状态 */
  const initialName = Object.keys(inforData?.dest_list ?? {})[0]??""
  const [name, setName] = useState("广州");

  /** 数据处理 */
  const tabNames = Object.keys(inforData?.dest_list ?? {});

  /** 事件处理函数 */
  const tabClickHandle = useCallback(function (index, item) {
    setName(item);
  }, []);

  
  return (
    <SectionV2Warpper>
      <div className="discount">
        <SectionHeader title={inforData.title} subtitle={inforData.subtitle} />
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
        <SectionRooms
          roomList={inforData?.dest_list?.[name]}
          itemWidth={"33.3%"}
        />
      </div>
    </SectionV2Warpper>
  );
});

HomeSectionV2.propTypes = {
  inforData: PropTypes.object,
};

export default HomeSectionV2;
