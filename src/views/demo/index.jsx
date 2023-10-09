import Indicator from "@/base-ui/indicator";
import React, { memo } from "react";
import { DemoWrapper } from "./style";

const Demo = memo(() => {
  const names = ["abc", "cba", "nba", "mba", "aaa", "bbb", "ccc", "ddd"];
  return (
    <DemoWrapper>
      <div className='control'>
        <button>pre</button>
        <button>next</button>
      </div>
      <div className="list">
        <Indicator>
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

export default Demo;
