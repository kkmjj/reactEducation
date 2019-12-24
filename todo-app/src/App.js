import React,{Component} from 'react';


class App extends Component {
  state={
    tasks: [
      { todo:'할일1'}
    ],
    task:''
  }
  onClickHandler =(e) =>{ // 눌렀을때 task 가 저장 
    const task = {todo:this.state.task}
    const tasks =[...this.state.tasks,task] // 그전에 있던 값들을 저장 해놓고 
    e.preventDefault();
    this.setState({
      tasks:tasks,
      task:''
    })

  }
  onChangeHandler =(e)=>{ //입력창에 현재 값 보여주기 
    this.setState({
      task:e.target.value
    })
  }
 

  render(){
    const Display = this.state.tasks.map((task,i)=>{  // 할일 화면에 보여주기 
      
      return(
        <div key={i}>
          <p>{task.todo} </p>
          <button>취소</button>
        </div>
      );
    })

  return (
    <div className="App">
      <div>
      <form> {/*form 으로 묶으면 focus가 같이 들어감  */}
      <input value={this.state.task} onChange={this.onChangeHandler}></input>
      <button onClick={this.onClickHandler}>저장</button>
      </form>
      </div>

      <div>
        {Display}
      </div>



    </div>
  );
}

}

export default App;
