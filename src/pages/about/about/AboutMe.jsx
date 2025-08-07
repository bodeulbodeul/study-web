import { Space, Typography } from "antd";
const { Text, Link } = Typography;
import { Descriptions } from "antd";

const items = [
  {
    key: "1",
    label: "Name",
    children: "윤서영",
  },
  {
    key: "2",
    label: "Telephone",
    children: "010-1111-1111",
  },
  {
    key: "4",
    span: 2,
    label: "Summary",
    children: (
      <div>
        <p>
          꾸준히 성장하는 개발자를 지향하며, 문제 해결 과정에서 배우는 것을
          즐깁니다.
        </p>
        <p>
          새로운 기술을 빠르게 익히고 실제 프로젝트에 적용하는 데 익숙하며,
          프론트엔드와 백엔드를 모두 경험한 풀스택 개발자로서 다양한 시야를
          갖추고 있습니다.
        </p>
        사용자 경험을 고려한 UI 구현부터 안정적인 API 설계까지 책임감 있게
        작업합니다.
      </div>
    ),
  },
  {
    key: "5",
    span: 2,
    label: "Strengths",
    children:
      "문서화 습관 · 빠른 학습 능력 · 사용자 중심 사고 · UI 디테일 집착 · 책임감 있는 일정 관리",
  },
];

export default function AboutMe() {
  return <Descriptions items={items} column={2} />;
}
