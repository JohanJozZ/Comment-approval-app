import React from 'react';

const CardComment = (props) => {
  return (
    <div className="card">
      <div className="content">{props.children}</div>
      <div className="ui buttons two">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  );
};

export default CardComment;
