import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const addTodoOnClick = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <div className="p-5 w-full flex text-lg  ">
        <input
          type="text"
          value={input}
          placeholder="add todo..."
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="min-w-[200px] bg-gray-900 text-gray-400 w-[90%] py-3 px-5 rounded-tl-lg rounded-bl-lg"
        />
        <button
          className=" min-w-[80px] bg-orange-900 hover:bg-orange-700 hover:transition duration-500 ease-in-out text-gray-200 w-[10%] p-2 rounded-tr-lg rounded-br-lg"
          disabled={input === ""}
          onClick={addTodoOnClick}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddTodo;
