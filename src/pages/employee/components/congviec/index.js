import React from "react";
import { Alert, Col, Container, Row } from "@themesberg/react-bootstrap";

import { CounterWidget } from "../../../../components/Widgets";
import { PageVisitsTable } from "../../../../components/Tables";
import { Button } from "@themesberg/react-bootstrap";
import { products } from "../../../../data/kpi";

const ButtonGroup = (props = {}) => {
  return (
    <Container className="mb-4">
      <Row>
        <Col xs={12} xl={4} className="d-flex justify-content-center">
          <Button variant="success" size="lg" className="me-1">
            Bắt Đầu
          </Button>
        </Col>
        <Col xs={12} xl={4} className="d-flex justify-content-center">
          <Button variant="danger" size="lg" className="me-1">
            Kết Thúc
          </Button>
        </Col>
        <Col xs={12} xl={4} className="d-flex justify-content-center">
          <Button variant="info" size="lg" className="me-1">
            Hàng Lỗi
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const TienDo = (props = {}) => {
  return (
    <Row className="justify-content-md-center mb-16">
      <Col xs={12} sm={6} xl={6} className="mb-4">
        <CounterWidget
          category="Tổng số sản phẩm đã làm trong ngày"
          title={products.success}
          iconColor="shape-secondary"
        />
      </Col>
      <Col xs={12} sm={6} xl={6} className="mb-4">
        <CounterWidget
          category="Tổng số mặt hàng bị lỗi trong ngày"
          title={products.erros}
        />
      </Col>
      <Col xs={12} sm={6} xl={6} className="mb-4">
        <CounterWidget
          category="Tổng số sản phẩm đã làm trong tháng"
          title={products.totalProduct}
        />
      </Col>
      <Col xs={12} sm={6} xl={6} className="mb-4">
        <CounterWidget
          category="Tổng số hàng lỗi trong tháng"
          title={products.totalErrors}
        />
      </Col>
    </Row>
  );
};

const CongViec = (props = {}) => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Công Việc"
            title={"May Cổ Áo"}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Mô tả công việc"
            title={"May như hướng dẫn"}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Thời gian làm việc hôm nay"
            title={products.totalProduct}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default () => {
  return (
    <>
      <CongViec />
      <TienDo />
      <ButtonGroup />
    </>
  );
};
