import { Table, Tag } from "antd";

export default function TodoTable({
  data,
  handleUpdateComplete,
  handleDelete,
}) {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "제목",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "완료 여부",
      dataIndex: "completed",
      key: "completed",
      render: (completed) => (
        <Tag color={completed ? "green" : "red"} onClick={handleComplete}>
          {completed ? "완료" : "미완료"}
        </Tag>
      ),
      width: 100,
    },
  ];

  const handleComplete = (record) => {
    handleUpdateComplete(record.completed, record.id);
  };

  return <Table columns={columns} dataSource={data} />;
}
