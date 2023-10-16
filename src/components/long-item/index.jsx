import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

const LongItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">均价 {itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongItem.propTypes = {
  itemData: PropTypes.object,
};

export default LongItem;
