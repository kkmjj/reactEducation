import React,{Component} from 'react';
import TaskDisplay from './TaskDisplay';
import TaskAdd from './TaskAdd';


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
 
  ondeleteHandler =(e) =>{  // 삭제 
    const tasks = this.state.tasks.filter((task,i) =>i!==e)
     // 해당 인덱스가 맞지 않으면참값이 되어서 filter 한 값들을 tasks 에넣어주기 
    this.setState({tasks})
      
      
  }

  render(){
  

  return (
    <div className="App">
      <div>
      <TaskAdd value={this.state.task} changeHandler={this.onChangeHandler}
      clickHandler={this.onClickHandler}></TaskAdd>
      </div>

      <div>
        <TaskDisplay tasks={this.state.tasks} ondeleteHandler={this.ondeleteHandler}></TaskDisplay>
      </div>



    </div>
  );
}

}






export default App;
