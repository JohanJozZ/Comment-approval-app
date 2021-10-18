import React from 'react';

const CommentFeed = (props) => {
  return <div className="ui container comments">{props.children}</div>;
};

export default CommentFeed;
