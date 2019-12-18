import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>안녕하세요 react 입니다 </h1>
      <Person></Person>
    </div>
  );
}


function Person(){
  return <h1>첫번째 컴포넌트입니다. </h1>
}


export default App;
