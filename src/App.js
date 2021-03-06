import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import Dialog from "./components/Dialog";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 3; i++) {
    array.push({
      id: i,
      category: `임시 카테고리`,
      text: `할 일 ${i}`,
      date: "2021/12/01",
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  const [dialog, setDialog] = useState(false);

  const nextId = useRef(4);

  const onInsert = useCallback((category, text, date) => {
    const todo = { id: nextId.current, category, text, date, checked: false };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setDialog(id);
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  const onConfirm = () => {
    setTodos((todos) => todos.filter((todo) => todo.id !== dialog));
    setDialog(false);
  };

  const onCancel = () => {
    setDialog(false);
  };

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
      {dialog && (
        <Dialog onConfirm={onConfirm} onCancel={onCancel} visible={dialog} />
      )}
    </div>
  );
};

export default App;
