import React from 'react';
const CommentDetail = (props) => {
  const { profile, author, timeAgo, text } = props;
  return (
    <div className="comment">
      <a href="#" className="avatar">
        <img src={profile} alt="profile" />
      </a>
      <div className="content">
        <a className="author" href="#">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
