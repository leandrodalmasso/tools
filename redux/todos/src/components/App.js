// Dependencies
import React from 'react';

// Components
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import ButtonsPanel from './ButtonsPanel';

const App = () => (
  <div>
    <AddTodo />
    <TodoList onTodoClick={() => null} />
    <ButtonsPanel />
  </div>
);

export default App;
