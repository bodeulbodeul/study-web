import { Table } from 'antd';
import projectData from './project.json'

const columns = [
    {
        title: '📛 제목 / 이름',
        dataIndex: 'name',
        key: 'name',
        render: text => <strong>{text}</strong>,
    },
    {
        title: '📆 진행 기간',
        dataIndex: 'period',
        key: 'period',
    },
    {
        title: '🛠️ 사용 기술 스택',
        dataIndex: 'techStack',
        key: 'techStack',
        render: stack => <span>{stack.join(', ')}</span>,
    },
    {
        title: '👤 역할',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: '✨ 핵심 기능',
        dataIndex: 'features',
        key: 'features',
    },

];

export default function Projects() {

    return <Table columns={columns} dataSource={projectData} pagination={{ position: ['none', 'none'] }}
    />

}
