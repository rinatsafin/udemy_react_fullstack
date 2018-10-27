import React from "react";
// import { Link } from "react-router-dom";

const Posts = () => {
  // const listId = [
  //   { id: 1, name: "Post 1", userName: "Fransis" },
  //   { id: 2, name: "Post 2", userName: "Joe" },
  //   { id: 3, name: "Post 3", userName: "Jhon" }
  // ];
  return [
    <div key="1">Hello</div>,
    <div key="2">i am</div>,
    <div key="3">a react app</div>
  ];
  // return <div>
  //   {/* one way: */}
  //     {/* {listId.map(item => <div>
  //         <Link key={item.id} to={`posts/${item.id}/${item.userName}`}>
  //           {item.name}
  //         </Link>
  //       </div>)} */}
  //   </div>;
};

export default Posts;
