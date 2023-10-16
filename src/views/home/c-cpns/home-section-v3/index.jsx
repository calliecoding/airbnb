import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { inforData } = props;
  return (
    <SectionV3Wrapper>
      <SectionHeader title={inforData.title} subtitle={inforData.subtitle} />

      <div className="room-list">
        <ScrollView>
          {inforData.list.map((item) => {
            return <RoomItem key={item.id} itemData={item} itemWidth={"20%"} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter name={"plus"} />
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  inforData: PropTypes.object,
};

export default HomeSectionV3;
