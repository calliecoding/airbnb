import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(item) {
    console.log("item", item);
    const newItems = [...selectItems];

    if (selectItems.includes(item)) {
      /** 二次选中时，移除 */
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item);
      newItems.splice(itemIndex, 1);
    } else {
      /** 选中 */
      newItems.push(item);
    }
    setSelectItems(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              key={item}
              onClick={(e) => itemClickHandle(item)}
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
