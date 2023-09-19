import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper >
      <li> {itemData.name}</li>;
    </ItemWrapper>
  )
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
