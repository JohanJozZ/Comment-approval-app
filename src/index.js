import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import CardComment from './components/CardComment';

class App extends React.Component {
  state = {
    comments: {
      author: 'Luis',
      profile: 'customer-1.jpg',
      text: 'Nice!',
      timeAgo: 'Today at 3:30pm',
    },
  };

  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <div className="ui container comments cards">
        <CardComment>
          <CommentDetail
            author="Luis"
            profile="customer-1.jpg"
            text="Nice!"
            timeAgo="Today at 3:30pm"
          />
        </CardComment>
        <CardComment>
          <CommentDetail
            author="Sara"
            profile="customer-2.jpg"
            text="Please keep up with this"
            timeAgo="Yesterday at 1:30pm"
          />
        </CardComment>
        <CardComment>
          <CommentDetail
            author="Pedro"
            profile="customer-3.jpg"
            text="Comment number 3"
            timeAgo="Yesterday at 8:30am"
          />
        </CardComment>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
