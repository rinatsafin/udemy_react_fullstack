import React from "react";
import NewsSlider from "../Widgets/NewsSlider";

const Home = props => {
  return (
    <div>
      <NewsSlider
        endpoint="articles"
        type="featured"
        start={0}
        amount={6}
        settings={{
          dots: true
        }}
      />
    </div>
  );
};

export default Home;
