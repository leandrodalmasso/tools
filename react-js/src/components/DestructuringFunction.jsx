import React from 'react';

export const post = {
  author: 'Abbigail Hammond',
  date: new Date(),
  text: 'Hi! How are you?'
};

function formatDate(date) {
  return date.toLocaleDateString();
}

function Post({
  author,
  date,
  text,
}) {
  return (
    <div>
      <p>{author}</p>
      <p>{formatDate(date)}</p>
      <p>{text}</p>
    </div>
  );
};

export default Post;
