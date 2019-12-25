import React from 'react';
const TaskDisplay =({tasks,ondeleteHandler}) => {

 
      
    return(
      tasks.map((task)=>{  // 할일 화면에 보여주기 
        return (
      <div key={task.id} className="alert alert-success">
        {task.todo} <button className="btn-primary" onClick={()=>ondeleteHandler(task.id)}>취소</button>
      </div>
    )
  })
    );
}



export default TaskDisplay;
