import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className=" bg-gray-700 w-screen h-screen px-48 pt-28">
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;
