import PropTypes from "prop-types";
import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeCurrentPageAction, fetchRoomListAction } from "@/store/modeules/entire/createActions";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );

  const num = 20 // 单页显示数据数量
  // 页码算法
  const totalPage = Math.ceil(totalCount / num);
  const startCount = currentPage * num + 1;
  const endCount = (currentPage + 1) * num;

  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
     // 回到顶部
     window.scrollTo(0, 0)
     dispatch(changeCurrentPageAction(pageCount - 1))
     dispatch(fetchRoomListAction(pageCount - 1))
  }
  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} color="primary" 
          onChange={pageChangeHandle}
          />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
