import React from 'react';

export const unreadMessages = ['React', 'Re: React', 'Re:Re: React'];

function MailBox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {(unreadMessages.length > 0) && true && (
        <h2>You have {unreadMessages.length} unread messages!</h2>
      )}
    </div>
  );
}

export default MailBox;