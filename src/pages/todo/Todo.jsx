export default function Todo() {
  /*
    completed : false
    id: 6
    title: "qui ullam ratione quibusdam voluptatem quia omnis"
    userId: 1
  */
  fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  // 특정 사용자의 TODO 목록 가져오기
  // 특정 사용자의 TODO 목록 중 완료된 것만 가져오기
  // 특정 사용자의 TODO 목록 중 완료되지 않은 것만 가져오기

  // TODO 목록 전체 가져오기
  // TODO 목록 중 완료된 것만 가져오기
  // TODO 목록 중 완료되지 않은 것만 가져오기

  // 특정  TODO 삭제하기
  // 특정  TODO 수정하기

  // 레이아웃 변경하기 ( 칸반 / 표 / 간단리스트 )

  // 사용자 입력란 + 조회

  return null;
}
