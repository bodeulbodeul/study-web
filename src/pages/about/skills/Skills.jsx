import { Tag, Typography } from "antd";
import skillData from "./skills.json";
const { Text } = Typography;
import styles from "./skills.module.css";

export default function Skills() {
  return (
    <>
      {skillData.map(({ category, color, skills }) => (
        <div key={category} className={styles.category}>
          <Text className={styles.label}>{category}</Text>
          {skills.map((skill) => (
            <Tag key={skill} bordered={false} color={color}>
              {skill}
            </Tag>
          ))}
        </div>
      ))}
    </>
  );
}
