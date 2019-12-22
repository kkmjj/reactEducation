import React, {Component } from 'react';

import Button from './Button';
import Display from './Display';



class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={
      number:0
    }
  }

  
  //onClickHandle(){} 해도 되나 this 값이 어디 this 인지 따로 적용해야함
  //onClickHandle 자체를 클릭했을때 가져오려면 () 사용 x this.onClickHandle
  onClickHandle =(data)=>{
    console.log(this.state.number);
    this.setState({number:this.state.number+data});
  }

  render(){
    return(
      
      <div className="App">
        <Display value={this.state.number}/>
        <div>
        <Button clickHandler={()=>this.onClickHandle(1)}>증가</Button>
        </div>
        <div>
        <Button clickHandler={()=>this.onClickHandle(-1)}>감소</Button>
        </div>
      </div>

    );
  }


}

export default App;
