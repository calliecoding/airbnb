import PropTypes from "prop-types";
import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { shallowEqual, useSelector } from "react-redux";

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

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} color="primary" />
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
