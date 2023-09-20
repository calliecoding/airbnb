import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const HomeSectionV1 = memo((props) => {
  const { inforData } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={inforData.title} subtitle={inforData.subtitle} />
      <SectionRooms roomList={inforData.list} />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  inforData: PropTypes.object,
};

export default HomeSectionV1;
