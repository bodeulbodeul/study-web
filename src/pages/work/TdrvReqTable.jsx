import { FileExcelFilled } from "@ant-design/icons";
import { Button, Table, Typography } from "antd";
import { useState } from "react";
import columns from "./columns.json";
import styles from "./tdrvReqTable.module.css";
const { Text } = Typography;

export default function TdrvReqTable() {
  const [loading, setLoading] = useState(false);
  const [rowSelection, setRowSelection] = useState([]);

  const tableHeader = () => {
    return (
      <div className={styles.header}>
        <div>
          <Text>총 건</Text>
        </div>
        <div className={styles.buttonGroup}>
          <Button size="middle">마스킹해제</Button>
          <Button size="middle">시승스케쥴현황</Button>
          <Button size="middle" icon={<FileExcelFilled />}>
            엑셀Export
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.layout} ${styles.tableLayout}`}>
      {tableHeader()}
      <Table
        bordered
        loading={loading}
        size="small"
        rowSelection={Object.assign({ type: "checkbox" }, rowSelection)}
        scroll={{ x: "100vw" }}
        dataSource={[]}
        columns={columns}
        pagination={{ position: ["none", "bottomCenter"] }}
      />
    </div>
  );
}
