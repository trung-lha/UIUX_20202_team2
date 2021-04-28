import React, { useState } from "react";
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
  Tabs,
  Tab,
} from "@themesberg/react-bootstrap";

import UserInfo from "./UserInfo";
import { PageVisitsTable } from "../../../../components/Tables";
import { CardInfor } from "../../../../components/Widgets";

const Kpi = () => {
  return (
    <Row>
      <Col xs={12} xl={12} className="mb-4">
        <Row>
          <Col xs={12} className="mb-4">
            <PageVisitsTable title={"KPI hôm nay"} />
          </Col>
        </Row>
      </Col>

      <Col xs={12} xl={12} className="mb-4">
        <Row>
          <Col xs={12} className="mb-4">
            <PageVisitsTable title={"KPI tháng này"} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const UserInfoList = () => {
  return (
    <Row>
      <Col xs={12} xl={8}>
        <br />
        <br />
        <CardInfor />
      </Col>
      <Col xs={12} xl={4}>
        <UserInfo />
      </Col>
    </Row>
  );
};

export default () => {
  const [key, setKey] = useState("contact");
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}>
          <Tab eventKey="contact" title="Thông tin công nhân">
            <UserInfoList />
          </Tab>
          <Tab eventKey="kpi" title="Tiến độ">
            <br />
            <br />
            <Kpi />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
};
