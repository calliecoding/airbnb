import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  /** 定义内部状态 */
  const [showRight, setShowRight] = useState(false);

  /** 组件渲染完毕后，判断是否显示右侧按钮*/
  const srcollContentRef = useRef(null);
  useEffect(() => {
    const scrollWidth = srcollContentRef.current.scrollWidth; //元素的整体宽度
    const clientWidth = srcollContentRef.current.clientWidth;

    const totalDiatance = scrollWidth - clientWidth;

    setShowRight(totalDiatance>0)
  }, [props.children]);
  return (
    <ViewWrapper>
      <div className="left">左-----</div>
      {showRight && <div className="right">右======</div>}
      <div className="scroll-content" ref={srcollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
