import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  /** 定义内部状态 */
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0); // 距离定位父级的偏移
  const totalDistanceRef = useRef()
    
  /** 组件渲染完毕后，判断是否显示右侧按钮*/
  const srcollContentRef = useRef(null);
  useEffect(() => {
    const scrollWidth = srcollContentRef.current.scrollWidth; //元素的整体宽度
    const clientWidth = srcollContentRef.current.clientWidth;
    totalDistanceRef.current = scrollWidth - clientWidth;

    setShowRight(totalDistanceRef.current > 0);
  }, [props.children]);

  function rightClickHandle(params) {
    const newIndex = posIndex + 1;
    setPosIndex(newIndex)
    const newEl =  srcollContentRef.current.children[newIndex]
    const newEloffSetLeft = newEl.offsetLeft
    console.log(newEl);
    srcollContentRef.current.style.transform = `translate(-${newEloffSetLeft}px)`
   
    // 判断是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newEloffSetLeft);
  }
  return (
    <ViewWrapper>
      <div className="left">左-----</div>
      {showRight && (
        <div className="right" onClick={rightClickHandle}>
          右======
        </div>
      )}
      <div className="scroll-content" ref={srcollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
