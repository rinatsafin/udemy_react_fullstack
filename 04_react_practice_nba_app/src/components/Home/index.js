import React from "react";
// WIDGETS
import NewsSlider from "../Widgets/NewsSlider";
import NewsList from "../Widgets/NewsList";

const Home = props => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{ dots: true }}
      />
      <NewsList
        type="card"
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  );
};

export default Home;
