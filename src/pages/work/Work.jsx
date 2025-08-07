import { Row, Col } from "antd";
import SearchBar from "./Searchbar";
import TdrvReqTable from "./TdrvReqTable";

function Work() {
  return (
    <>
      <Row>
        <Col span={24}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <TdrvReqTable />
        </Col>
      </Row>
    </>
  );
}

export default Work;
