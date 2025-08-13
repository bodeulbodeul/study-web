import { CheckCircleFilled, CloseOutlined } from "@ant-design/icons";
import { Button, Input, Table, Typography } from "antd";
import { useState } from "react";

export default function TodoTable({
  data,
  loading,
  handleUpdate,
  handleUpdateComplete,
  handleDelete,
}) {
  const [editingId, setEditingId] = useState("");
  const [tempValue, setTempValue] = useState("");

  const handleUpdateTitle = () => {
    handleUpdate(editingId, tempValue);
    handleEditReset();
  };

  const handleEditReset = () => {
    setEditingId(null);
    setTempValue(null);
  };

  const handleComplete = (record) => {
    handleUpdateComplete(record.completed, record.id);
  };

  const editCell = (record) => {
    setEditingId(record.id);
    setTempValue(record.title);
  };

  const columns = [
    {
      title: "완료 여부",
      dataIndex: "completed",
      key: "completed",
      render: (_, record) => {
        return (
          <Button
            size="large"
            shape="circle"
            icon={
              record.completed ? (
                <CheckCircleFilled
                  style={{ fontSize: "2.4rem", color: "#52c41a" }}
                />
              ) : (
                " "
              )
            }
            onClick={() => handleComplete(record)}
          />
        );
      },
      filters: [
        {
          text: "완료",
          value: true,
        },
        {
          text: "미완료",
          value: false,
        },
      ],
      onFilter: (value, record) => record.completed === value,
      width: 110,
      align: "center",
    },
    {
      title: "할 일",
      dataIndex: "title",
      key: "title",
      render: (title, record) => {
        return editingId === record.id && !record.completed ? (
          <Input
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            onPressEnter={handleUpdateTitle}
            onBlur={handleUpdateTitle}
            autoFocus
          />
        ) : (
          <Typography.Text
            delete={record.completed}
            onClick={() => editCell(record)}
          >
            {title}
          </Typography.Text>
        );
      },
    },
    {
      title: "Delete",
      key: "delete",
      render: (_, record) => (
        <CloseOutlined
          style={{ fontSize: "large" }}
          onClick={() => handleDelete(record.id)}
        />
      ),
      width: 10,
      align: "center",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record.id}
      loading={loading}
    />
  );
}
