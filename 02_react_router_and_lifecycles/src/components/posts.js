import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <Link to="/posts/1/fransis">post fransis</Link>
      <br />
      <Link to="/posts/2/mary">post mary</Link>
      <br />
      <Link to="/posts/3/jhon">post jhon</Link>
    </div>
  );
};

export default Posts;
