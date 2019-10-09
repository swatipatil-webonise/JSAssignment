import React from "react";
export const AddTodo = (props) => {
  return (
    <div>
      <input type="text" name="desc" value={props.desc} onChange={props.onUserType}/>
      <input type="button" value="add" onClick={props.onAddTodo}/>
    </div>
  );
}