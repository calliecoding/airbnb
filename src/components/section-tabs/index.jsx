import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import classNames from 'classnames';
import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabNames = [],tabClick  } = props;

  /** 选中index */
  const [currentIndex, setCurrentIndex] = useState(0);
  
  function itemClickHandle(index,item) {
    setCurrentIndex(index);
    tabClick(index,item)
  }
  return (
    <TabsWrapper>
      {tabNames.map((item, index) => {
        return (
          <li
            key={item}
            className={classNames("item", { active: index === currentIndex })}
            onClick={(e) => itemClickHandle(index,item)}
          >
            {item}
          </li>
        );
      })}
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick:PropTypes.func
};

export default SectionTabs;
