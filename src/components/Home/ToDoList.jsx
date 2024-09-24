import React, { useState, useEffect } from "react";
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
import SaveIcon from "@mui/icons-material/Save";

// 로컬 스토리지에서 데이터를 불러오는 함수
const loadFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

// 로컬 스토리지에 데이터를 저장하는 함수
const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const ToDoList = () => {
  const [tasks, setTasks] = useState(loadFromLocalStorage()); // 초기값을 로컬 스토리지에서 불러오기
  const [inputValue, setInputValue] = useState("");

  // Add a new task
  const addTask = () => {
    if (inputValue.trim()) {
      const updatedTasks = [
        ...tasks,
        { text: inputValue, checked: false, isEditing: false },
      ];
      setTasks(updatedTasks);
      saveToLocalStorage(updatedTasks); // 추가된 항목을 로컬 스토리지에 저장
      setInputValue("");
    }
  };

  // Handle input change for new task
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks); // 업데이트된 항목을 로컬 스토리지에 저장
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks); // 삭제된 항목을 로컬 스토리지에 저장
  };

  // Toggle edit mode for a task
  const toggleEdit = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(updatedTasks);
  };

  // Save the edited task
  const saveTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText, isEditing: false } : task
    );
    setTasks(updatedTasks);
    saveToLocalStorage(updatedTasks); // 편집된 항목을 로컬 스토리지에 저장
  };

  return (
    <Container
      style={{
        width: "100%", // 부모 요소의 30%만 차지하도록 설정
        margin: "0 auto", // 중앙 정렬
        padding: "10px", // 패딩 추가
        backgroundColor: "white",
        height: "370px",
        borderRadius: "10px",
        border: "1px solid #3333",
      }}
    >
      <h2 style={{ margin: "10px" }}>ToDo</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: "100%", marginRight: 10 }} // TextField를 부모의 100%로 설정
          InputProps={{
            style: {
              height: 40,
              margin: 5,
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTask}
          style={{ width: 80, height: 40 }}
        >
          ADD
        </Button>
      </div>
      <List
        style={{
          maxHeight: "220px", // 최대 높이 설정
          overflowY: "auto", // 스크롤바 활성화
        }}
      >
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#f9f9f9",
              marginTop: "2px",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                checked={task.checked}
                onChange={() => toggleTask(index)}
              />
              {task.isEditing ? (
                <TextField
                  defaultValue={task.text}
                  onBlur={(e) => saveTask(index, e.target.value)}
                  autoFocus
                  fullWidth
                />
              ) : (
                <ListItemText primary={task.text} />
              )}
            </div>
            <div style={{ display: "flex" }}>
              {task.isEditing ? (
                <IconButton
                  onClick={() => saveTask(index, task.text)}
                  color="primary"
                  sx={{ width: "40px" }}
                >
                  <SaveIcon />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => toggleEdit(index)}
                  sx={{ width: "40px", color: "red" }}
                >
                  <EditIcon />
                </IconButton>
              )}
              <IconButton
                onClick={() => deleteTask(index)}
                sx={{ width: "40px", color: "gray" }}
              >
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
