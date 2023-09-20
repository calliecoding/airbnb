import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";

import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { inforData } = props;
  return (
    <SectionV1Wrapper>
      <SectionHeader title={inforData.title} subtitle={inforData.subtitle} />
      <SectionRooms roomList={inforData.list} />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  inforData: PropTypes.object,
};

export default HomeSectionV1;
