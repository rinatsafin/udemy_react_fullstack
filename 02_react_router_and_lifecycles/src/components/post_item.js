import React from "react";

const PostItem = props => {
  return <div>
      {props.match.params.id} - {props.match.params.username}
    </div>;
};

export default PostItem;
