import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { IndicatorWrapper } from "./style";
import { useRef } from "react";

const Indicator = memo((props) => {
  const { selectIndex } = props;

  const contentRef = useRef();
  useEffect(() => {
    /** 计算滚动距离，公式 */

    // 1.获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex];

    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    // 2.content的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    console.log(itemLeft, contentWidth, contentScroll, "useEffect");

    // 3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    console.log(distance)

    // 4.改变位置即可
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
