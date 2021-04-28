import { Col, Row } from "@themesberg/react-bootstrap";
import React from "react";
import { PageVisitsTable } from "../../../../components/Tables";
export default (props = {}) => {
  return (
    <Row>
      <Col xs={12} xl={12} className="mb-4">
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
      </Col>
    </Row>
  );
};
