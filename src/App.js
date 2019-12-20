import React from 'react';
import './App.css';
import {Person ,My} from "./Person";

class App extends React.Component{
  // 클래스만 state만 사용 컴포넌트에 사용할 자료 
  state ={
    person:[
      {name: "김민준", age:25},
      {name: "홍길동", age:32},

    ]
  }
  render() {
    const {person} = this.state;
    //this.state.person[0].name="이개똥" 이렇게 값을 바꾸면 안됨
     return(
      <div className="App">
          <Person 
          name={person[0].name} 
          age={person[0].age}
          myfun={()=>console.log("test")} >
          
           <div> 안녕하세요!!!!</div>
          </Person>
      </div>
    );
  }
}




export default App;
