import React, { memo } from "react";
import { LeftWrapper } from "./style";
import IconLogo from "@/assets/svg/icon_logo";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
    const navigate = useNavigate()
  function logoClickHandle(params) {
    navigate('/home')
  }
  return (
    <LeftWrapper className="left">
      <div className="log" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
