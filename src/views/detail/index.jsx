import React, { memo } from "react";
import { useSelector } from "react-redux";
import { DetailWrapper } from "./style";
import DetailPictures from "./c-cpns/detail-pictures";

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));
  return (
    <DetailWrapper>
     

      <DetailPictures/>
    </DetailWrapper>
  );
});

export default Detail;
