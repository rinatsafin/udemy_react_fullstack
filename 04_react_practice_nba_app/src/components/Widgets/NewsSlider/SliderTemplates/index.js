import React from "react";
import { Link } from "react-router-dom";
import Slick from "react-slick";
import styles from "./slidertemplates.css";

const SliderTemplates = props => {
  const { type, data, settings: s } = props;
  let template = null;
  const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...s
  };
  // const settings = Object.assign(
  //   {
  //     dots: true,
  //     infinite: true,
  //     arrows: false,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
  //   },
  //   s
  // );
  switch (type) {
    case "featured":
      template = data.map(el => (
        <div key={el.id}>
          <div className={styles.feautured_item}>
            <img
              className={styles.feautured_image}
              src={`../images/articles/${el.image}`}
              alt="NBA aticles preview"
            />
            <Link to={`/aticles/${el.id}`}>
              <div className={styles.feautured_caption}>{el.title}</div>
            </Link>
          </div>
        </div>
      ));
      break;
    default:
      template = null;
  }
  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplates;
