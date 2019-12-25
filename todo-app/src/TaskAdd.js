
import React from 'react';
// state 가 없기 떄문에 함수로 그냥 만들어도 상관 없음 
const TaskAdd = ({value,changeHandler,clickHandler}) =>{
    return (
      <div className="well">
      <form> {/*form 으로 묶으면 focus가 같이 들어감  */}
      <input value={value} onChange={changeHandler}></input>
      <button onClick={clickHandler}>저장</button>
      </form>
      </div>

    )
  
  }

  export default TaskAdd;