import PropTypes from "prop-types";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { PicturesWrapper } from "./style";
import PictureBrowser from "@/base-ui/picture-browser";
import { useState } from "react";

const DetailPictures = memo((props) => {
  /** 定义组件内部的状态 */
  const [showBrowser, setShowBrowser] = useState(false);
  /** 获取redux数据 */
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual,
  );

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  );
});

DetailPictures.propTypes = {};

export default DetailPictures;
