import React from 'react';

export const ListTodo = ({
  id,
  todos,
  onEdit,
  onDelete,
  }) => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos && todos.map(todo => 
            <tr key={id}>
              <td>{++id}</td>
              <td>{todo.description}</td>
              <td><button onClick={onEdit.bind(null, todo.description)}>Edit</button></td>
              <td><button onClick={onDelete.bind(null, todo.description)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
