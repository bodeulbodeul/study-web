import { Button, Col, Row, Space, Typography } from "antd";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoLogin from "./TodoLogin";
import TodoProgress from "./TodoProgress";
import TodoTable from "./TodoTable";
import useTodos from "./useTodos";

export default function Todo() {
  const [userId, setUserId] = useState(null);
  const { todos, loading, addTodo, updateTodo, updateCompleted, deleteTodo } =
    useTodos(userId);

  const handleLogout = () => setUserId(null);

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
              <Button onClick={handleLogout}>로그아웃</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col span={20}>
          <TodoInput handleAddTodo={addTodo} />
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col span={20}>
          <TodoProgress todos={todos} />
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col span={20}>
          <TodoTable
            data={todos}
            loading={loading}
            handleUpdate={updateTodo}
            handleUpdateComplete={updateCompleted}
            handleDelete={deleteTodo}
          />
        </Col>
      </Row>
    </Space>
  );
}
