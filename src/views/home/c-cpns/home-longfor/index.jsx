import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongItem from "@/components/long-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongfor = memo((props) => {
  const { inforData } = props;

  return (
    <LongforWrapper>
      <SectionHeader title={inforData.title} subtitle={inforData.subtitle} />

      <div className="longfor-list">
        <ScrollView>
          {inforData.list?.map((item) => {
            return (
              <LongItem key={item.city} className="city" itemData={item} />
            );
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  inforData: PropTypes.object,
};

export default HomeLongfor;
