import React from "react";

export default (WrappedComponent, WrappedComponentNext, argOne) => {
  return props => (
    <div>
      {argOne}
      <WrappedComponent {...props} />
      <WrappedComponentNext {...props} />
    </div>
  );
};
