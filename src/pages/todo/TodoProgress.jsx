import { Avatar, Badge, Card, Col, Progress, Row, Typography } from "antd";

const colors = {
  "0%": "#ff6b6b", // 0% - 파스텔 레드
  "20%": "#fff3b0", // 10% - 연한 노랑 (노랑 계열 구간 끝)
  "50%": "#b7e4c7", // 50% - 파스텔 연두
  "80%": "#a0c4ff", // 80% - 파스텔 연파랑
  "100%": "#6699ff", // 100% - 진한 파스텔 블루
};

export default function TodoProgress({ todos }) {
  // todos에서 완료된 TODO의 개수를 계산
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  // 완료된 TODO의 비율을 계산
  const completionRate = totalCount
    ? Math.ceil((completedCount / totalCount) * 100, 1)
    : 0;

  return (
    <Card title="진행 상황" style={{ width: "100%" }}>
      <Row gutter={20}>
        <Col>
          <Row gutter={10}>
            <Col>
              <Typography.Text>전체</Typography.Text>
            </Col>
            <Col>
              <Badge count={totalCount} color="gray" />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={10}>
            <Col>
              <Typography.Text>완료</Typography.Text>
            </Col>
            <Col>
              <Badge count={completedCount} color="green" />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={10}>
            <Col>
              <Typography.Text>미완료</Typography.Text>
            </Col>
            <Col>
              <Badge count={totalCount - completedCount} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}></Col>
      </Row>
      <Progress percent={completionRate} status="active" strokeColor={colors} />
    </Card>
  );
}
