import PropTypes from "prop-types";
import React, { memo } from "react";
import Rating from "@mui/material/Rating";

import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData, itemWidth} = props;

  // 动态样式
  const customStyle = {
    verifycolor: itemData?.verify_info?.text_color || "#39576a",
    contentcolor: itemData?.bottom_info?.content_color || "green",
    itemwidth:itemWidth,
  };
  return (
    <ItemWrapper {...customStyle}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
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
  itemWidth:PropTypes.string
};

export default RoomItem;
