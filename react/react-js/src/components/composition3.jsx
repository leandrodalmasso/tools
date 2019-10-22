import React from 'react';

function Contacts() {
  return (
    <h2>Contacts</h2>
  );
}

function Chat() {
  return (
    <h2>Chat</h2>
  );
}

function SplitPanel({ left, right}) {
  return (
    <div>
      <div style={{float: 'left'}}>
        {left}
      </div>
      <div style={{float: 'right'}}>
        {right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPanel
      left={<Contacts />}
      right={<Chat />}
    />
  );
}

export default App;
