import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionWrapperV1 } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const HomeSectionV1 = memo((props) => {
  const { inforData } = props;
  return (
    <SectionWrapperV1>
      <SectionHeader title={inforData.title} subtitle={inforData.subtitle} />
      <SectionRooms roomList={inforData.list} />
    </SectionWrapperV1>
  );
});

HomeSectionV1.propTypes = {
  inforData: PropTypes.object,
};

export default HomeSectionV1;
