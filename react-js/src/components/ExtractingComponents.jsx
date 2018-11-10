import React from 'react';

export const comment = {
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
  date: new Date(),
  text: 'I hope you enjoy learning React!',
};

function formatDate(date) {
  return date.toLocaleDateString();
}

// function Comment({ author, date, text }) {
//   return (
//     <div className="comment">
//       <div className="comment__user-info">
//         <img
//           alt={author.name} 
//           className="comment__user-info__avatar"
//           src={author.avatarUrl}
//         />
//         <h2 className="comment__user-info__name">
//           {author.name}
//         </h2>
//       </div>
//       <div className="comment__text">
//         {text}
//       </div>
//       <div className="comment__date">
//         {formatDate(date)}
//       </div>
//     </div>
//   );
// }

function UserInfo({ user }) {
  return (
    <div className="comment__user-info">
      <img
        alt={user.name}
        className="comment__user-info__avatar"
        src={user.avatarUrl}
      />
      <h2 className="comment__user-info__name">
        {user.name}
      </h2>
    </div>    
  );
}

function Comment({ author, date, text }) {
  return (
    <div className="comment">
      <UserInfo user={author} />
      <div className="comment__text">
        {text}
      </div>
      <div className="comment__date">
        {formatDate(date)}
      </div>
    </div>
  );
}

export default Comment;
