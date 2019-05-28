import React from 'react';

export const post = {
  author: 'Abbigail Hammond',
  date: new Date(),
  text: 'Hi! How are you?'
};

function formatDate(date) {
  return date.toLocaleDateString();
}

class Post extends React.Component {
  render() {
    const {
      author,
      date,
      text,
    } = this.props;

    return (
      <div>
        <p>{author}</p>
        <p>{formatDate(date)}</p>
        <p>{text}</p>
      </div>
    );
  }
}

export default Post;
