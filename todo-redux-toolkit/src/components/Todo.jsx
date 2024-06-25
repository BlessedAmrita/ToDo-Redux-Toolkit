import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  toggleTodo,
  editTodo,
  editTodoText,
} from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="">
        {todos.map((todo) => {
          return (
            <div className="px-5 mb-1 w-full flex text-lg" key={todo.id}>
              <li
                className={`${
                  todo.completed ? `line-through bg-green-950` : ``
                } flex items-center min-w-[200px] bg-gray-900 text-gray-400 w-[90%] px-5 rounded-tl-lg rounded-bl-lg list-none`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onClick={() => {
                    dispatch(toggleTodo(todo.id));
                  }}
                  className="bg-yellow-900 w-[5%] cursor-pointer"
                  disabled={todo.editable}
                />

                <input
                  type="text"
                  readOnly={!todo.editable}
                  value={todo.text}
                  onChange={(e) =>
                    dispatch(
                      editTodoText({ id: todo.id, text: e.target.value })
                    )
                  }
                  className={`${
                    todo.completed ? `line-through bg-green-950` : ``
                  }  bg-gray-900 text-gray-400 w-[90%] pl-5  py-3`}
                />
              </li>
              <button
                onClick={() => {
                  dispatch(editTodo({ id: todo.id }));
                }}
                disabled={todo.completed}
                className="min-w-[80px] bg-green-900 hover:bg-green-700 hover:transition duration-500 ease-in-out text-gray-200 w-[5%] p-2"
              >
                {todo.editable ? "Save" : "Edit"}
              </button>

              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
                className="min-w-[80px] bg-orange-900 hover:bg-orange-700 hover:transition duration-500 ease-in-out text-gray-200 w-[5%] p-2 rounded-tr-lg rounded-br-lg"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
