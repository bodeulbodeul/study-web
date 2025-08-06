import { Flex, Typography } from 'antd';


export default function LabeledField({ label, children }) {

    return (
        <Flex gap="1" vertical>
            <Typography.Text type="secondary">{label}</Typography.Text>
            {children}
        </Flex>
    )
}