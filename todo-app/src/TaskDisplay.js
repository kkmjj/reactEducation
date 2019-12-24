import React from 'react';
const TaskDisplay =({tasks,ondeleteHandler}) => {

 
      
    return(
      tasks.map((task,i)=>{  // 할일 화면에 보여주기 
        return (
      <div key={i} class="alert alert-success">
        {task.todo} <button onClick={()=>ondeleteHandler(i)}>취소</button>
      </div>
    )
  })
    );
}



export default TaskDisplay;
