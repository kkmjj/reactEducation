import React,{Component} from 'react';
import TaskDisplay from './TaskDisplay';
import TaskAdd from './TaskAdd';

import {firestore} from './firebase';

class App extends Component {
  state={
    tasks: [
    ],
    task:''
  }

  // componentDidMount 라는 함수를 이용하여 firebase 안에 컬렉션을 가져왔으면 
  componentDidMount(){
    const tasks =[...this.state.tasks]
    firestore.collection('tasks').get().then(docs =>{
      console.log("성공");

      docs.forEach(doc=>{
        console.log(doc.data().todo)
        tasks.push({todo:doc.data().todo,id:doc.id})
      })

      this.setState({tasks:tasks})
    })
    
  }

  onClickHandler =(e) =>{ // 눌렀을때 task 가 저장 
    e.preventDefault();
    firestore.collection('tasks').add(
      {todo:this.state.task}).then((e)=>{
        console.log(e) // id 가옴 
        const tasks =[...this.state.tasks,{todo:this.state.task,id:e.id} ]
        // ...전에 tasks에 값 넣기
        this.setState({tasks, task:''})

       
      })
    
 

  }
  onChangeHandler =(e)=>{ //입력창에 현재 값 보여주기 
    this.setState({
      task:e.target.value
    })
  }
 
  ondeleteHandler =(id) =>{  // 삭제 
    // const tasks = this.state.tasks.filter((task,i) =>i!==e)
    //  // 해당 인덱스가 맞지 않으면참값이 되어서 filter 한 값들을 tasks 에넣어주기 
    // this.setState({tasks})

      firestore.collection('tasks').doc(id).delete().then(
        ()=>{
          const tasks = this.state.tasks.filter((task) =>task.id!==id)
          this.setState({tasks}) // {} 를 해줘야 밖에 있는 state 값임 
        })

      
      
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
