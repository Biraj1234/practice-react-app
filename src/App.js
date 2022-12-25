import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Fix API issues" />
      <Todo text="Learn React Js" />
      <Todo text="Build React Js App." />
    </div>
  );
}

export default App;
