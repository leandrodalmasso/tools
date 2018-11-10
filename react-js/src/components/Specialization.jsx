import React from 'react';

function Dialog({ title, message }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome!"
      message="Thank you for visiting our website.."
    />
  );
}

export default WelcomeDialog;
