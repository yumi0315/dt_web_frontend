// Header.jsx
import React from "react";

// npm i styled-components
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const Button = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 8px 15px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e2e6ea;
  }

  &.primary {
    background-color: #007bff;
    color: white;
    border: 1px solid #007bff;

    &:hover {
      background-color: #0056b3;
      border-color: #004085;
    }
  }
`;

// 컴포넌트 정의
function Header() {
  return (
    <HeaderContainer>
      <Button>Eng</Button>
      <Button>Kor</Button>
      <Button className="Log out">Log Out</Button>
    </HeaderContainer>
  );
}

export default Header;
