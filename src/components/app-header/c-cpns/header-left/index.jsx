import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper className="left">
      <div className="log">
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
