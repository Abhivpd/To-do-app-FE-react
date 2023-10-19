import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import ToDoItem from "./components/ToDoItem";
import { getTodos, saveTodos } from "./utils/features";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());

  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const editHandler = (updatedTodo: TodoItemType): void => {
    const newTodo = todos.map((todo) => {
      if (todo.id === updatedTodo.id) todo = updatedTodo;
      return todo;
    });
    setTodos(newTodo);
  };

  const submitHandler = (): void => {
    const newToDo = {
      title: title,
      isCompleted: false,
      id: String(Math.random() * 1000),
    };

    if (title) setTodos((prev) => [...prev, newToDo]);

    setTitle("");
  };

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <Container maxWidth="md" sx={{ height: "100vh" }}>
      <Header />
      <Outlet />

      {/* <Stack height={"70%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((item) => (
          <ToDoItem
            key={item.id}
            todo={item}
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </Stack>
      <TextField
        fullWidth
        label={"New Task"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submitHandler();
        }}
      />
      <Button
        sx={{ margin: "1rem 0" }}
        variant="contained"
        fullWidth
        onClick={submitHandler}
        disabled={!title}
      >
        Add
      </Button> */}
    </Container>
  );
};

export default App;
