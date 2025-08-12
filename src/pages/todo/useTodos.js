import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export default function useTodos(userId) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const request = async (url, options = {}) => {
    setLoading(true);
    return fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      ...options,
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching data:", error);
        return []; // 또는 throw error; 로 재전달
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // TODO 목록 전체 가져오기
  const getData = () =>
    request(`${BASE_URL}/todos`).then((json) => setTodos(json));

  // 특정 사용자의 TODO 목록 가져오기
  const getUserData = () => {
    request(`${BASE_URL}/users/${userId}/todos`).then((json) => setTodos(json));
  };

  const addTodo = (title) => {
    if (title.trim() === "") return; // 빈 문자열 방지
    request(`${BASE_URL}/todos`, {
      method: "POST",
      body: JSON.stringify({
        userId,
        title,
        completed: false,
      }),
    }).then((json) => setTodos((prevTodos) => [json, ...prevTodos]));
  };

  // TODO 수정하기
  const updateTodo = (id, title) => {
    request(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
      }),
    }).then((json) =>
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, title: json.title } : todo
        )
      )
    );
  };

  // TODO 완료 상태 변경하기
  const updateCompleted = (completed, id) => {
    request(`${BASE_URL}/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: !completed }),
    }).then((json) =>
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: json.completed } : todo
        )
      )
    );
  };

  // TODO 삭제하기
  const deleteTodo = (id) => {
    request(`${BASE_URL}/todos/${id}`, { method: "DELETE" }).then(() => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    });
  };

  // 사용자 선택시 해당 사용자의 TODO 목록 가져오기
  useEffect(() => {
    if (userId === "admin") {
      getData();
    } else if (userId && userId !== "admin") {
      getUserData();
    }
    // 초기 로드 시 모든 TODO 목록을 가져오지 않도록 함
    return () => {
      setTodos([]);
      setLoading(false);
    };
  }, [userId]);

  return {
    todos,
    loading,
    addTodo,
    updateTodo,
    updateCompleted,
    deleteTodo,
  };
}
