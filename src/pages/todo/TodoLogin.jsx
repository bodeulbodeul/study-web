import { Alert, Button, Col, Input, Row, Space, Typography } from "antd";
import { useState } from "react";

export default function UserInput({ handleUserId }) {
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState("");

  // 사용자 ID 입력 후 로그인 버튼 클릭 시
  const onLoginClick = () => {
    if (userId) {
      handleUserId(userId);
      setStatus("");
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <Row justify="center" align="middle">
        <Col>
          <Typography.Title level={2}>Login</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={3}>
          <Space.Compact>
            <Input
              placeholder="사용자 ID를 입력하세요"
              value={userId}
              status={status}
              onChange={(e) => (setUserId(e.target.value), setStatus(""))}
              onPressEnter={onLoginClick}
            />
            <Button type="primary" onClick={onLoginClick}>
              로그인
            </Button>
          </Space.Compact>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        {status === "error" && (
          <Col span={3}>
            <Alert message="사용자 ID를 입력해주세요." type="error" showIcon />
          </Col>
        )}
      </Row>
    </>
  );
}
