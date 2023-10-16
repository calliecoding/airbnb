// import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { RoomsWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modeules/detail";

const EntireRooms = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  /** 事件处理 */
  const itemClickHandle = useCallback(
    (itemData) => {
      dispatch(changeDetailInfoAction(itemData));
      navigate("/detail");
    },
    [navigate],
  );
  return (
    <RoomsWrapper>
      <h2 className="title">{totalCount}多处住所</h2>

      <div className="list">
        {!!roomList.length &&
          roomList.map((item) => {
            return (
              <RoomItem
                key={item._id}
                itemData={item}
                itemWidth="20%"
                itemClick={itemClickHandle}
              />
            );
          })}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

EntireRooms.propTypes = {};

export default EntireRooms;
