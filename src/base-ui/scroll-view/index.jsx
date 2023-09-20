import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  /** 定义内部状态 */
  const [showRight, setShowRight] = useState(false); // 右边按钮
  const [showLeft, setShowLeft] = useState(false); // 左边按钮
  const [posIndex, setPosIndex] = useState(0); // 距离定位父级的偏移
  const totalDistanceRef = useRef();

  /** 组件渲染完毕后，判断是否显示右侧按钮*/
  const srcollContentRef = useRef(null);
  useEffect(() => {
    const scrollWidth = srcollContentRef.current.scrollWidth; //元素的整体宽度
    const clientWidth = srcollContentRef.current.clientWidth;
    totalDistanceRef.current = scrollWidth - clientWidth;

    setShowRight(totalDistanceRef.current > 0);
  }, [props.children]);

  function rightClickHandle(params) {
    console.log(11);
    const newIndex = posIndex + 1;
    setPosIndex(newIndex);
    const newEl = srcollContentRef.current.children[newIndex];
    const newElOffSetLeft = newEl.offsetLeft;
    srcollContentRef.current.style.transform = `translate(-${newElOffSetLeft}px)`;

    // 判断是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newElOffSetLeft);
    setShowLeft(newElOffSetLeft > 0);
  }

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    setPosIndex(newIndex);
    const newEl = srcollContentRef.current.children[newIndex];
    const newElOffSetLeft = newEl.offsetLeft;

    srcollContentRef.current.style.transform = `translate(-${newElOffSetLeft}px)`;
    // 判断是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newElOffSetLeft);
    setShowLeft(newElOffSetLeft > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={() => {
            controlClickHandle(false);
          }}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={() => {
            controlClickHandle(true);
          }}
        >
          <IconArrowRight />
        </div>
      )}

      <div className="srcoll">
      <div className="scroll-content" ref={srcollContentRef}>
        {props.children}
      </div>
      </div>
    
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
