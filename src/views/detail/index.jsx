import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailWrapper } from "./style";
import DetailPictures from "./c-cpns/detail-pictures";
import { changeHeaderConfigAction } from "@/store/modeules/main";

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      changeHeaderConfigAction({
        isFixed: false,
        topAlpha:false,
      })
    );
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPictures />
    </DetailWrapper>
  );
});

export default Detail;
