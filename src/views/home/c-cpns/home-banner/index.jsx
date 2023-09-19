import React, { memo } from "react";
import { BannerWrapper } from "./style";

const HomeBanner = memo(() => {
  return (
    <BannerWrapper>
      <div className="banner">banner</div>
    </BannerWrapper>
  );
});

export default HomeBanner;
