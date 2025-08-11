import { Table, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

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
      render: (_, record) => {
        return (
          <Tag
            color={record.completed ? "green" : "red"}
            onClick={() => handleComplete(record)}
          >
            {record.completed ? "완료" : "미완료"}
          </Tag>
        );
      },
      width: 100,
    },
    {
      title: "Delete",
      key: "delete",
      render: (_, record) => (
        <DeleteOutlined
          style={{ fontSize: "large" }}
          onClick={() => handleDelete(record.id)}
        />
      ),
      width: 50,
      align: "center",
    },
  ];

  const handleComplete = (record) => {
    handleUpdateComplete(record.completed, record.id);
  };

  return (
    <Table columns={columns} dataSource={data} rowKey={(record) => record.id} />
  );
}
