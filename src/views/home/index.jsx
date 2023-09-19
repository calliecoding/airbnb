import React, { memo, useEffect, useState } from "react";

import myRequest from "@/services";
import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner/index.jsx";

const Home = memo(() => {
  const [highScore, setHighScore] = useState({});

  
  useEffect(() => {
    myRequest
      .get({
        url: "/home/highscore",
      })
      .then((res) => {
        console.log(res.list);
        setHighScore(res);
      });
  }, []);
  return (
    <HomeWrapper>
      {/* <div className="home"> */}
        <HomeBanner/>
        <div className="content">
        content
        </div>
      {/* </div> */}
     </HomeWrapper>
  );
});

export default Home;
