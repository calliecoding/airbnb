import React, { memo, useState } from "react";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import { HeaderCenter, HeaderLeft, HeaderRight } from "./c-cpns";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

const AppHeader = memo(() => {
  /** 组件内部状态 */
  const [isSearch, setIsSearch] = useState(false);
  /** redux */
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );

  const { isFixed } = headerConfig;

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
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
  );
});

export default AppHeader;
