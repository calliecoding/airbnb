import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";

const SectionFooter = memo((props) => {
  const { name } = props;

  let message = "显示全部";
  if (name) {
    message = `显示更多${name}房源`;
  }

  // 动态样式
  const customStyle = {
    color: name ? "#00848A" : "#000",
  };
  return (
    <FooterWrapper {...customStyle}>
      <div className="info">
        <div className="text">{message}</div>
        <div className="icon">
          <IconMoreArrow />
        </div>
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};

export default SectionFooter;
