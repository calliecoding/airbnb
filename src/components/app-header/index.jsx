import React, { memo, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import { HeaderCenter, HeaderLeft, HeaderRight } from "./c-cpns";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import { useScrollPosition } from "@/hooks";

const AppHeader = memo(() => {
  /** 组件内部状态 */
  const [isSearch, setIsSearch] = useState(false);
  /** redux */
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual,
  );
  const { isFixed, topAlpha } = headerConfig;

  /** 监听滚动 */
  const { scrollY } = useScrollPosition();
  // 记录之前的位置
  const prevY = useRef(0);
  // 在正常情况的情况下(搜索框没有弹出来), 不断记录值
  if (!isSearch) prevY.current = scrollY;
  // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离的30
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  /** 透明度的逻辑 */
  const isAlpha = topAlpha && scrollY === 0;
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isSearch} />
        </div>

        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
