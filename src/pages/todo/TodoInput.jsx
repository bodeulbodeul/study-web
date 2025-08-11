import { Alert, Button, Col, Input, Row, Space } from "antd";
import { useState } from "react";

export default function TodoInput({ handleAddTodo }) {
  const [title, setTitle] = useState();
  const [status, setStatus] = useState("");

  const handleAddClick = () => {
    if (title) {
      handleAddTodo(title);
      setTitle("");
    } else {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
    setStatus("");
  };

  return (
    <>
      <Space.Compact size="large" style={{ width: "100%" }}>
        <Input
          placeholder="할 일을 입력하세요"
          value={title}
          status={status}
          onChange={handleChange}
          onPressEnter={handleAddClick}
        />
        <Button onClick={handleAddClick} type="primary">
          추가
        </Button>
      </Space.Compact>
      {status === "error" && (
        <Row justify="center" align="middle">
          <Col span={3}>
            <Alert message="할 일을 입력하세요" type="error" showIcon />
          </Col>
        </Row>
      )}
    </>
  );
}
