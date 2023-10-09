import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import SearchTabs from "./c-cpns/search-tabs";
import SearchTitles from "@/assets/data/search_titles";
import SearchSections from "./c-cpns/search-sections";
import { CSSTransition } from "react-transition-group";

const HeaderCenter = memo((props) => {
  /** 组件内部状态 */
  const { isSearch, searchBarClick } = props;

  const titles = SearchTitles.map((item) => item.title);
  const [tabIndex, setTabIndex] = useState(0);

  function searchBarClickHandle(params) {
    if (searchBarClick) searchBarClick();
  }
  const searchBarEle = (
    <CSSTransition
      in={!isSearch}
      classNames="bar"
      timeout={250}
      unmountOnExit={true}
    >
      <div className="search-bar" onClick={searchBarClickHandle}>
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CSSTransition>
  );

  const searchDetailEle = (
    <CSSTransition
      in={isSearch}
      classNames="detail"
      timeout={250}
      unmountOnExit={true}
    >
      <div className="search-detail">
        <SearchTabs titles={titles} tabClickHandle={setTabIndex} />
        <div className="infos">
          <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
        </div>
      </div>
    </CSSTransition>
  );
  return (
    <CenterWrapper isSearch={isSearch}>
      {searchBarEle} {searchDetailEle}
    </CenterWrapper>
  );
});

export default HeaderCenter;
