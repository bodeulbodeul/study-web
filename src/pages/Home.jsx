import { Col, Row, Typography } from "antd";

function Home() {
  return (
    <>
      <Row>
        <Col span={24}>
          <Typography.Title>홈</Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Typography.Paragraph>
            React와 Ant Design을 사용한 프로젝트입니다.
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Typography.Paragraph>
            이 프로젝트는 React와 Ant Design을 사용하여 개발되었습니다. 다양한 페이지를 탐색해 보세요!
          </Typography.Paragraph>
        </Col>
      </Row>
    </>
  );
}

export default Home;
