import handler from "@/pages/api/hello";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export const List = ({ todos = [], onDelete }) => {
  return (
    <ul>
      {todos.map((todos, index) => (
        <div key={index} className="jagsaalt">
          <input type="checkbox" name="" id="" />
          {todos}
          <div className="list">
            <button onClick={() => onDelete(index)}>
              <FaTrashAlt />
            </button>{" "}
          </div>
        </div>
      ))}
    </ul>
  );
};
