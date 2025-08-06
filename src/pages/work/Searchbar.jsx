import { CaretUpOutlined, CaretDownOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Input, Row, Select, Space, Typography } from 'antd';
import { useState } from 'react';
import LabeledField from '../../components/LabeledField';
import styles from './tdrvReqTable.module.css';
const { RangePicker } = DatePicker;
const { Title } = Typography;

export default function Searchbar() {

    const [open, setOpen] = useState(false);
    const Col6 = ({ children }) => <Col span={6}>{children}</Col>

    return (
        <div>
            <div className={styles.header}>
                <Title level={4} className={styles.title}>시승신청현황</Title>
                <div className={styles.buttonGroup}>
                    <Button size='large'>초기화</Button>
                    <Button size='large'>조회</Button>
                    <Button size='large'>승인완료</Button>
                    <Button size='large'>반려</Button>
                    <Button size='large'>취소</Button>
                    <Button size='large' color="default" variant="solid">신규</Button>
                </div>
            </div>

            <div className={`${styles.layout} ${styles.searchLayout}`}>
                {/* 항상 보이는 영역 */}
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>

                    <Row gutter={20}>
                        <Col6>
                            <LabeledField label='신청일자'><RangePicker variant="underlined" placeholder="" /></LabeledField>
                        </Col6>
                        <Col6>
                            <LabeledField label='시승일자'><RangePicker variant="underlined" placeholder="" /></LabeledField>
                        </Col6>
                        <Col6>
                            <LabeledField label='반환일자'><RangePicker variant="underlined" placeholder="" /></LabeledField>
                        </Col6>
                        <Col6>
                            <Row gutter={20}>
                                <Col span={12}>
                                    <LabeledField label='시승유형'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col>
                                <Col span={12}>
                                    <LabeledField label='시승유형'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col>
                            </Row>
                        </Col6>
                    </Row>

                    {/* 토글로 추가 표시 */}
                    {open && (
                        <>
                            <Row gutter={20}>
                                <Col6>
                                    <LabeledField label='판매기회'>
                                        <Input variant="underlined" suffix={<SearchOutlined />} />
                                    </LabeledField>
                                </Col6>
                                <Col6>
                                    <LabeledField label='고객명'>
                                        <Input variant="underlined" placeholder='한글 또는 영어만 입력하시기 바랍니다' />
                                    </LabeledField>
                                </Col6>
                                <Col6>
                                    <LabeledField label='차량번호'>
                                        <Input variant="underlined" />
                                    </LabeledField>
                                </Col6>
                                <Col6>
                                    <Row gutter={20}>
                                        <Col span={12}>
                                            <LabeledField label='승인상태'>
                                                <Select
                                                    variant="underlined"

                                                    defaultValue="전체"
                                                    options={[
                                                        { value: '', label: '전체' },
                                                        { value: 'jack', label: 'Jack' },
                                                        { value: 'lucy', label: 'Lucy' },
                                                        { value: 'Yiminghe', label: 'yiminghe' },
                                                    ]}
                                                />
                                            </LabeledField>
                                        </Col>
                                        <Col span={12}>
                                            <LabeledField label='운행상태'>
                                                <Select
                                                    variant="underlined"

                                                    defaultValue="전체"
                                                    options={[
                                                        { value: '', label: '전체' },
                                                        { value: 'jack', label: 'Jack' },
                                                        { value: 'lucy', label: 'Lucy' },
                                                        { value: 'Yiminghe', label: 'yiminghe' },
                                                    ]}
                                                />
                                            </LabeledField>
                                        </Col>
                                    </Row>
                                </Col6>
                            </Row>
                            <Row gutter={20}>
                                <Col6>
                                    <LabeledField label='차대번호'>
                                        <Input variant="underlined" suffix={<UnorderedListOutlined />} />

                                    </LabeledField>
                                </Col6>
                                <Col6>
                                    <LabeledField label='브랜드'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col6>
                                <Col6>
                                    <LabeledField label='시리즈'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col6>
                                <Col6>
                                    <LabeledField label='모델'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col6>
                            </Row>
                            <Row gutter={20}>
                                <Col6>
                                    <LabeledField label='ModelIII'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col6>
                                <Col6>
                                    <LabeledField label='딜러'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col6>
                                <Col6>
                                    <LabeledField label='쇼룸'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col6>
                                <Col6>
                                    <LabeledField label='팀'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col6>
                            </Row>
                            <Row gutter={20}>
                                <Col6>
                                    <LabeledField label='담당SC'>
                                        <Select
                                            variant="underlined"

                                            defaultValue="전체"
                                            options={[
                                                { value: '', label: '전체' },
                                                { value: 'jack', label: 'Jack' },
                                                { value: 'lucy', label: 'Lucy' },
                                                { value: 'Yiminghe', label: 'yiminghe' },
                                            ]}
                                        />
                                    </LabeledField>
                                </Col6>
                            </Row>
                        </>
                    )}
                </Space>
                {/* 버튼 */}

            </div>
            <div style={{ textAlign: 'center' }}>
                <Button className={styles.epxnadButton} color="default" variant="solid" onClick={() => setOpen(!open)}>

                    {open ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </Button>
            </div>
        </div >
    );
}