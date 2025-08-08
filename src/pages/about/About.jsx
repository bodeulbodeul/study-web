import { Anchor, Card, Col, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./about.module.css";
import AboutMe from "./about/AboutMe";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const anchorData = [
  { id: "about", children: <AboutMe />, title: "✨ About Me" },
  { id: "skills", children: <Skills />, title: "🛠️ Skills" },
  { id: "projects", children: <Projects />, title: "📁 Project" },
  { id: "experience", children: <Experience />, title: "🕓 Experience" },
  // { id: "core", children: <>WORKING</>, title: "🌱 Core Values" },
  // {
  //   id: "communication",
  //   children: <>WORKING</>,
  //   title: "🤝 Collaboration & Communication",
  // },
];
export default function Abount() {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();

  useEffect(() => {
    var _a;
    setTargetOffset(
      (_a = topRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight
    );
  }, []);

  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={20}>
            <Space direction="vertical">
              {anchorData.map((item) => (
                <Row key={`content-${item.id}`} id={item.id}>
                  <Col span={24}>
                    <Card title={item.title}>{item.children}</Card>
                  </Col>
                </Row>
              ))}
            </Space>
          </Col>
          <Col span={4}>
            <Anchor
              targetOffset={targetOffset}
              items={anchorData.map((item) => ({
                key: item.id,
                href: `#${item.id}`,
                title: item.title,
              }))}
            />
          </Col>
        </Row>
        <Row className={styles.top} ref={topRef}></Row>
      </Col>
    </Row>
  );
}
