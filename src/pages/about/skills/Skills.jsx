import { Col, Row, Space, Tag, Typography } from "antd";
import skillData from "./skills.json";
const { Text } = Typography;

export default function Skills() {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      {skillData.map(({ category, color, skills }) => (
        <Row>
          <Col span={2}>
            <Text>{category}</Text>
          </Col>
          <Col>
            {skills.map((skill) => (
              <Tag key={skill} bordered={false} color={color}>
                {skill}
              </Tag>
            ))}
          </Col>
        </Row>
      ))}
    </Space>
  );
}
