import React, { memo, useEffect, useState } from "react";

import myRequest from "@/services";

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
  <div>
        <h2>{highScore.title}</h2>
        <h2>{highScore.subtitle}</h2>
        <ul>
            {
                highScore.list?.length && 
                highScore.list.map(item=>{
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
  </div>
  )
});

export default Home;
