import React from "react";
// WIDGETS
import NewsSlider from "../Widgets/NewsSlider";
import NewsList from "../Widgets/NewsList";

const Home = props => {
  return (
    <div>
      <NewsSlider
        endpoint="articles"
        type="featured"
        start={0}
        amount={6}
        settings={{ dots: true }}
      />
      <NewsList
        endpoint="articles"
        type="card"
        loadmore={true}
        start={3}
        amount={6}
      />
    </div>
  );
};

export default Home;
