import React from "react";
export const ListTodo = props => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.desc}</td>
              <td><button onClick={props.onEdit.bind(null, todo.desc,todo.id)}>Edit</button></td>
              <td><button onClick={props.onDelete.bind(null, todo.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
