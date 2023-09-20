import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import classNames from 'classnames';
import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabNames = [] } = props;

  /** 选中index */
  const [currentIndex, setCurrentIndex] = useState(0);
  
  function itemClickHandle(index) {
    setCurrentIndex(index);
  }
  return (
    <TabsWrapper>
      {tabNames.map((item, index) => {
        return (
          <li
            key={item}
            className={classNames("item", { active: index === currentIndex })}
            onClick={(e) => itemClickHandle(index)}
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
};

export default SectionTabs;
