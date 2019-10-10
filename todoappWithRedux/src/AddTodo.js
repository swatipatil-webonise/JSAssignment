import React from 'react';

export const AddTodo = ({
  description,
  onUserType,
  onAddTodo,
  }) => {
  return (
    <div>
      <input type="text" name="desc" value={description} onChange={onUserType}/>
      <input type="button" value="add" onClick={onAddTodo}/>
    </div>
  );
}
