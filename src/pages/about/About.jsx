import React, { useEffect, useState } from 'react';
import { Anchor, Col, Row } from 'antd';
import MyCard from '../../components/MyCard';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Experience from './experience/Experience';
import styles from './about.module.css'
import AboutMe from './about/AboutMe';

const anchorData = [
    { id: "about", children: <AboutMe />, title: "✨ About Me" },
    { id: "skills", children: <Skills />, title: "🛠️ Skills" },
    { id: "projects", children: <Projects />, title: "📁 Project" },
    { id: "experience", children: <Experience />, title: "🕓 Experience" },
    { id: "experience", children: <>WORKING</>, title: "🌱 Core Values" },
    { id: "experience", children: <>WORKING</>, title: "🤝 Collaboration & Communication" }
]
export default function Abount() {

    const topRef = React.useRef(null);
    const [targetOffset, setTargetOffset] = useState();

    useEffect(() => {
        var _a;
        setTargetOffset((_a = topRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight);
    }, []);

    return (
        <div>
            <Row>
                <Col span={22}>
                    {anchorData.map(item => (
                        <div id={item.id}>
                            <MyCard title={item.title}>
                                {item.children}
                            </MyCard>
                        </div>
                    ))}
                </Col>
                <Col span={2}>
                    <Anchor
                        targetOffset={targetOffset}
                        items={anchorData.map(item => (
                            { key: item.id, href: `#${item.id}`, title: item.title }
                        ))}
                    />
                </Col>
            </Row>
            <div className={styles.top} ref={topRef}>
            </div>
        </div >
    );
};