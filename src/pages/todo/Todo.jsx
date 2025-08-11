import { Button, Card, Col, Input, Row, Space } from "antd";
import { Typography } from "antd";
import { useEffect, useState } from "react";
import TodoLogin from "./TodoLogin";
import TodoInput from "./TodoInput";
import TodoProgress from "./TodoProgress";
import TodoTable from "./TodoTable";

export default function Todo() {
  const [userId, setUserId] = useState(null);
  const [todos, setTodos] = useState([]);

  // TODO 목록 가져오기
  useEffect(() => {
    getData();
  }, []);

  // 사용자 선택시 해당 사용자의 TODO 목록 가져오기
  useEffect(() => {
    if (userId) {
      getUserData();
    }
  }, [userId]);

  // TODO 추가
  const addTodo = (title) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId,
        title,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos((prevTodos) => [...prevTodos, json]));
  };

  // TODO 목록 전체 가져오기
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  // 특정 사용자의 TODO 목록 가져오기
  const getUserData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  // TODO 수정하기
  const updateTodo = (id, title, completed) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id
              ? { ...todo, title: json.title, completed: json.completed }
              : todo
          )
        )
      );
  };

  // TODO 완료 상태 변경하기
  const updateCompleted = (completed, id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: json.completed } : todo
          )
        )
      );
  };

  // TODO 삭제하기
  const deleteTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    });
  };

  // 레이아웃 변경하기 ( 칸반 / 표 / 간단리스트 )

  // 사용자 입력 없이 조회 막기
  if (!userId) {
    return <TodoLogin handleUserId={setUserId} />;
  }

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Row align="middle" justify="center">
        <Col span={20}>
          <Row align="middle" justify="space-between">
            <Col>
              <Typography.Title level={2}>{userId}'s Todo</Typography.Title>
            </Col>
            <Col>
              <Button onClick={() => setUserId(null)}>로그아웃</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col span={20}>
          <TodoInput
            handleAddTodo={addTodo}
            handleUpdateComplete={updateCompleted}
            handleDelete={deleteTodo}
          />
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col span={20}>
          <TodoProgress todos={todos} />
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col span={20}>
          <TodoTable data={todos} />
        </Col>
      </Row>
    </Space>
  );
}
