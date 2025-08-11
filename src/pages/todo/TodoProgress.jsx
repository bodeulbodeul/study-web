import { Progress } from "antd";

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
    <Progress percent={completionRate} status="active" strokeColor={colors} />
  );
}
