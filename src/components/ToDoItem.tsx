import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
  editHandler: (updatedTodo: TodoItemType) => void;
};

const ToDoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<TodoItemType["title"]>(todo.title);

  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack direction={"row"} alignItems={"center"}>
        {editActive ? (
          <TextField
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && textValue) {
                todo.title = textValue;
                editHandler(todo);
                return setEditActive((prev) => !prev);
              }
            }}
          />
        ) : (
          <Typography marginRight={"auto"}>{todo.title}</Typography>
        )}
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => completeHandler(todo.id)}
        ></Checkbox>
        <Button
          onClick={() => {
            setEditActive((prev) => !prev);
            if (!editActive) {
              todo.title = textValue;
              return editHandler(todo);
            }
          }}
        >
          {editActive ? <Typography>Done</Typography> : <Edit></Edit>}
        </Button>
        <Button onClick={() => deleteHandler(todo.id)}>
          <Delete></Delete>
        </Button>
      </Stack>
    </Paper>
  );
};

export default ToDoItem;
