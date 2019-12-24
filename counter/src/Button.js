import React from 'react';



// clickHandler는 이벤트 이름 
const Button =({children,clickHandler}) =>
<div>
    <button class="Btn" onClick={clickHandler}>{children}></button>
</div>



export default Button;