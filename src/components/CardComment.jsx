import React from 'react';

const CardComment = (props) => {
  return (
    <div className="card">
      <div className="content">{props.children}</div>
      <div className="ui buttons two">
        <div className="ui green button">Approve</div>
        <div className="ui red button">Reject</div>
      </div>
    </div>
  );
};

export default CardComment;
