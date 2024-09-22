import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { text: "todo1", checked: false },
    { text: "todo2", checked: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, checked: false }]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const newText = prompt("Edit your task", tasks[index].text);
    if (newText) {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      );
      setTasks(updatedTasks);
    }
  };

  return (
    <Container maxWidth="sm">
      <h1 style={{ textAlign: "center" }}>TODOLIST</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          label="TODO"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: 500, marginRight: 10 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTask}
          style={{ width: 10 }}
        >
          ADD
        </Button>
      </div>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#f9f9f9",
              marginTop: "10px",
              borderRadius: "4px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={task.checked}
                onChange={() => toggleTask(index)}
              />
              <ListItemText primary={task.text} />
            </div>
            <div>
              <IconButton onClick={() => editTask(index)} color="secondary">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => deleteTask(index)} color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ToDoList;
