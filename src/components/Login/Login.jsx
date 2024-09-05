import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../CSS/Login.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Login = ({ onLoginSuccess }) => {
  // 상태 훅을 사용하여 입력 값과 로그인 상태를 관리합니다.
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // 하드코딩된 사용자 정보
  const validId = "user";
  const validPassword = "123";

  // 로그인 처리 함수
  const handleLogin = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작을 방지합니다.

    if (id === validId && password === validPassword) {
      setMessage("");
      onLoginSuccess();
    } else {
      setMessage(
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">아이디 또는 비밀번호가 잘못되었습니다</Alert>
        </Stack>
      );
    }
  };

  return (
    <div class="wrap">
      <div class="wave -one"></div>
      <div class="wave -two"></div>
      <div class="wave -three"></div>

      <div class="main">
        <form onSubmit={handleLogin}>
          <div class="login">
            <TextField
              id="outlined-basic"
              label="ID"
              variant="outlined"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              sx={{
                //height 및 width 변경
                "& .MuiInputBase-root": {
                  height: 48,
                  width: 335,
                },
              }}
            />
          </div>
          <div class="login">
            <TextField
              variant="outlined"
              id="password"
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                //height 및 width 변경
                "& .MuiInputBase-root": {
                  height: 48,
                  width: 335,
                },
              }}
            />
          </div>
          <Button variant="contained" type="submit">
            로그인
          </Button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
