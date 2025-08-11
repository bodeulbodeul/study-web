import { Button, Col, Input, Row, Space } from "antd";
import { useState } from "react";

export default function UserInput({ handleUserId }) {
  const [userId, setUserId] = useState(null);

  // 사용자 ID 입력 후 로그인 버튼 클릭 시
  const onLoginClick = () => {
    if (userId) {
      handleUserId(userId);
    } else {
      alert("사용자 ID를 입력해주세요.");
    }
  };

  return (
    <Row>
      <Col>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder="사용자 ID를 입력하세요"
            value={userId || ""}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button type="primary" onClick={onLoginClick}>
            로그인
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
