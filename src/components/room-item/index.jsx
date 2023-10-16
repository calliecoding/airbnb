import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";

import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth, itemClick } = props;

  // 动态样式
  const customStyle = {
    verifycolor: itemData?.verify_info?.text_color || "#39576a",
    contentcolor: itemData?.bottom_info?.content_color || "green",
    itemwidth: itemWidth,
  };

  const sliderRef = useRef();
  const [selectIndex, setSelectIndex] = useState(0);

  /** 事件处理的逻辑 */
  function controlClickHandle(isRight = true, e) {
    // 阻止冒泡
    e.stopPropagation();
    // 上一个面板/下一个面板
    isRight ? sliderRef.current.next() : sliderRef.current.prev();

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;

    const len = itemData?.picture_urls?.length;
    // 边界判断
    if (newIndex < 0) newIndex = len - 1;
    if (newIndex > len - 1) newIndex = 0;

    setSelectIndex(newIndex);
  }

  function itemClickHandle(params) {
    // 点击事件处理
    if (itemClick) itemClick(itemData);
  }
  //展示轮播图
  const sliderElement = (
    <div className="slider">
      <div className="controls">
        <div className="btn left" onClick={(e) => controlClickHandle(false, e)}>
          <IconArrowLeft height="30" width="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true, e)}>
          <IconArrowRight height="30" width="30" />
        </div>
      </div>

      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="dot-item" key={item}>
                <span
                  className={classNames("dot", {
                    active: selectIndex === index,
                    dot2:
                      index === selectIndex + 1 || index === selectIndex - 1,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
  // 展示单一图片
  const picElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  return (
    <ItemWrapper {...customStyle} onClick={(e) => itemClickHandle()}>
      <div className="inner">
        {itemData?.picture_urls ? sliderElement : picElement}
        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
        <div className="bottom">
          <Rating
            name="read-only"
            value={itemData.star_rating ?? 2.5}
            precision={0.5}
            readOnly
            sx={{ fontSize: "12px", color: itemData.star_rating_color }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">· {itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick: PropTypes.func,
};

export default RoomItem;
