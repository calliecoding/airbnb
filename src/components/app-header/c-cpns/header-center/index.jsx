import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import SearchTabs from "./c-cpns/search-tabs";
import SearchTitles from "@/assets/data/search_titles";
import SearchSections from "./c-cpns/search-sections";

const HeaderCenter = memo((props) => {
  /** 组件内部状态 */
  const { isSearch, searchBarClick } = props;

  const titles = SearchTitles.map((item) => item.title);
  const [tabIndex, setTabIndex] = useState(0);

  function searchBarClickHandle(params) {
    if(searchBarClick)searchBarClick()
  }
  const searchBarEle = (
    <div className="search-bar" onClick={searchBarClickHandle}>
      <div className="text">搜索房源和体验</div>
      <div className="icon">
        <IconSearchBar />
      </div>
    </div>
  );

  const searchDetailEle = (
    <div className="search-detail">
      <SearchTabs titles={titles} tabClickHandle={setTabIndex} />
      <div className="infos">
        <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
      </div>
    </div>
  );
  return (
    <CenterWrapper>{!isSearch ? searchBarEle : searchDetailEle}</CenterWrapper>
  );
});

export default HeaderCenter;
