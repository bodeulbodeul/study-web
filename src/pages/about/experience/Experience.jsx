import { Timeline } from "antd";
import ExperienceItem from "./ExperienceItem";
import { Statistic } from "antd";

const experienceData = [
  {
    key: "1",
    company: "ㅁㅁㅁ플랫폼회사",
    period: "2024.09 ~ 재직중",
    position: "프론트엔드 개발자",
    role: "사내 플랫폼 관리자 페이지 개편 및 신규 서비스 UI 구축",
    stack: ["React", "Vite", "React Router", "Tailwind CSS", "Git"],
    achievement: "복잡한 페이지 구조를 SPA로 전환, 페이지 로딩 속도 50% 개선",
  },
  {
    key: "2",
    company: "ㅁㅁㅁ솔루션회사",
    period: "2023.06 ~ 2024.08",
    position: "백엔드 개발자",
    role: "금융 정보 통합 서비스 백엔드 개발 및 배치 처리 담당",
    stack: ["Java", "Spring Boot", "Spring Batch", "JPA", "PostgreSQL", "SVN"],
    achievement: "정산 배치 처리시간 30% 단축, 월 오류율 70% 감소",
  },
  {
    key: "3",
    company: "ㅁㅁㅁ랩회사",
    period: "2019.04 ~ 2022.05",
    position: "풀스택 개발자",
    role: "중소기업 ERP 시스템 개발 및 유지보수",
    stack: ["JSP", "Spring", "Oracle", "JavaScript", "SVN"],
    achievement:
      "20개 이상 중소기업 고객사 대응, 업무 자동화 도입으로 관리 효율 개선",
  },
];

export default function Experience() {
  return (
    <>
      {/* <Statistic title="총 경력" value="년" /> */}
      <Timeline
        mode="left"
        items={experienceData.map((item, index) => ({
          label: item.period,
          color: index === 0 ? "blue" : "gray",
          children: (
            <ExperienceItem
              company={item.company}
              position={item.position}
              role={item.role}
              stack={item.stack}
              achievement={item.achievement}
            />
          ),
        }))}
      />
    </>
  );
}
