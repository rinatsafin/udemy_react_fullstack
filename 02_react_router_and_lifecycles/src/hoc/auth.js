import React from "react";

const Auth = props =>
  props.auth !== "success" ? <h3>You not autorized</h3> : props.children;

export default Auth;
