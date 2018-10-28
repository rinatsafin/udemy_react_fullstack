import React from "react";

import UserHOC from "../hoc/user_hoc";

const User = props => {
  console.log(props);
  return <div>User 1</div>;
};

const UserNext = props => {
  console.log(props);
  return <div>User 2</div>;
};

export default UserHOC(User, UserNext, "Hello");
