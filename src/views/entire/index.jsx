import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagination from "./c-cpns/entire-pagination";
import { getEntireRoomList } from "@/services/modules/entire";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "@/store/modeules/entire/createActions";
import { changeHeaderConfigAction } from "@/store/modeules/main";

const Entire = memo(() => {
  //发送网络请求 
  const dispatch = useDispatch()
  useEffect(() => {
    // getEntireRoomList(0).then((res) => {
    //   console.log(res);
    // });
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({
        isFixed: true,
        topAlpha:false,
    }))
  },[dispatch]);



  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
