import React from 'react';

export const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

// Keys used within arrays should be unique among their siblings. However they don’t need to be globally unique.

function Blog({ posts, }) {
  const sidebar = (
    <ul>
      {posts.map(post =>
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );

  const content = (
    posts.map(post =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    )
  );

  return (
    <dir>
      {sidebar}
      <hr/>
      {content}
    </dir>
  );
}

export default Blog;
