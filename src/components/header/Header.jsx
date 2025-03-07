import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

function Header({ togglePage }) {
  const [state, setState] = useState(false);
  return (
    <>
      <StyleHeader />
      <header className="header">
        <h1>logo</h1>
        <nav className="nav">
          <a
            className="nav-a"
            href="https://www.leadertask.ru/blog/to-do-list?ysclid=m6b1mhm279284411415"
          >
            Правило
          </a>
          <a className="nav-a" href="https://todoist.com/ru">
            Список
          </a>
          <a
            className="nav-a"
            href="https://en.wikipedia.org/wiki/VK_(service)"
          >
            Контакты
          </a>
          <a
            className="nav-a"
            href="https://www.leadertask.ru/blog/to-do-list?ysclid=m6b1nqrgxk791384802"
          >
            Друзья
          </a>
          <a className="nav-a" href="https://web.telegram.org/a/">
            Добавить в друзья
          </a>
        </nav>
        <Togle onClick={togglePage}> {state ? "TodoList" : "Users"}</Togle>
      </header>
    </>
  );
}

export default Header;

const StyleHeader = createGlobalStyle`
.header{
  width: 100vw;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color:slategrey;
  color: white;
  position: sticky;
  top: 0px;
  z-index: 10;
}
.nav-a{
  color: white;
  text-decoration: none;
}
.nav{
  display: flex;
  gap: 70px;
}
`;

const Togle = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  background-color: slateblue;
  cursor: pointer;
`;
