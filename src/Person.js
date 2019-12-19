
import React from 'react';



const  Person = (props) => (

    <div>
        <My></My>
        <h1>하나의컴포넌트 안에 다른 컴포넌트 넣기 </h1>
        <h1>한번에여러개 실행 </h1>
<h1>이름은 : {props.name} 나이는 {props.age}</h1>
    </div>

)

  

  const My =() => {
      return  <h1> return 연습하기 </h1>
  }

export { Person , My}