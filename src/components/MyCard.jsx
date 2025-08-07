import { Card } from "antd";
import styles from "./myCard.module.css";

export default function MyCard({ children, title }) {
  return (
    <Card title={title} className={styles.card}>
      {children}
    </Card>
  );
}
