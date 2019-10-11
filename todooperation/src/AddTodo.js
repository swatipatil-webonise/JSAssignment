import React from 'react';

export const AddTodo = ({
  buttonvalue,
  description,
  onUserType,
  onAddTodo,
}) => {
  return (
    <div>
      <input type="text" name="desc" value={description} onChange={onUserType} />
      <input type="button" value={buttonvalue} onClick={onAddTodo} />
    </div>
  );
}
