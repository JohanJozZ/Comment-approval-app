import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import CardComment from './components/CardComment';
import CommentFeed from './components/CommentFeed';

class App extends React.Component {
  state = {
    approvedComments: [
      {
        author: 'Luis',
        profile: 'customer-1.jpg',
        text: 'Nice!',
        timeAgo: 'Today at 3:30pm',
      },
    ],
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="ui segment">
        <div className="ui two column grid">
          <div className="ui container comments cards column">
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
          <div className="column">
            <CommentFeed>
              <CommentDetail
                author={this.state.approvedComments[0].author}
                profile="customer-3.jpg"
              />
            </CommentFeed>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
