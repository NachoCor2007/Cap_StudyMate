import React from 'react';
import './App.css';
import List from "./components/List";

function App() {
  return (
      <List items={[{id: 0, name: "task1", isDone: false}]}/>
  );
}

export default App;
