import React from "react";
// WIDGETS
import NewsSlider from "../Widgets/NewsSlider";
import NewsList from "../Widgets/NewsList";
import VideosList from "../Widgets/VideosList";
const Home = props => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{ dots: true }}
      />
      <NewsList type="card" loadMore={true} start={0} amount={3} />
      <VideosList
        type="card"
        title={true}
        start={0}
        amount={3}
        loadMore={true}
      />
    </div>
  );
};

export default Home;
