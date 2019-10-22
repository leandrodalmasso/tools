import React from 'react';

function UserGreeting() {
  return <h1>Welcome!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting({ isLoggedIn }) {
  return (
    isLoggedIn ? <UserGreeting /> : <GuestGreeting />
  );
}

export default Greeting;
