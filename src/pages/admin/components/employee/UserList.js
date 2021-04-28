import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faCashRegister,
  faChartLine,
  faEdit,
  faEllipsisH,
  faExternalLinkAlt,
  faEye,
  faTrashAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Nav,
  Card,
  Image,
  Button,
  Table,
  Dropdown,
  ProgressBar,
  Pagination,
  ButtonGroup,
  Alert,
  Modal,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";

import { Routes } from "../../../../routes";
import { pageVisits, pageTraffic, pageRanking } from "../../../../data/tables";
import { UserListData } from "../../../../data/transactions";
import FormUser from "./FormUser";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return value ? (
    <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}
        {suffix}
      </span>
    </span>
  ) : (
    "--"
  );
};

export const PageVisitsTable = (props = {}) => {
  const { title } = props;
  const TableRow = (props) => {
    const { pageName, views, returnValue, bounceRate } = props;
    const bounceTxtColor = bounceRate === 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <th scope="row">{pageName}</th>
        <td>{views}</td>
        <td>{returnValue}</td>
        <td className={`${bounceTxtColor} me-3`}>{Math.abs(bounceRate)}%</td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col xs={6}>
            <h5>{title}</h5>
          </Col>
          <Col xs={6}>
            <Alert variant="warning">Chưa đạt đủ chỉ tiêu</Alert>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Sản Phẩm</th>
            <th scope="col">Số lượng yêu cầu</th>
            <th scope="col">Số lượng đã làm</th>
            <th scope="col">Tiến độ</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export const PageTrafficTable = () => {
  const TableRow = (props) => {
    const {
      id,
      source,
      sourceIcon,
      sourceIconColor,
      sourceType,
      category,
      rank,
      trafficShare,
      change,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">
            {id}
          </Card.Link>
        </td>
        <td className="fw-bold">
          <FontAwesomeIcon
            icon={sourceIcon}
            className={`icon icon-xs text-${sourceIconColor} w-30`}
          />
          {source}
        </td>
        <td>{sourceType}</td>
        <td>{category ? category : "--"}</td>
        <td>{rank ? rank : "--"}</td>
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{trafficShare}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar
                variant="primary"
                className="progress-lg mb-0"
                now={trafficShare}
                min={0}
                max={100}
              />
            </Col>
          </Row>
        </td>
        <td>
          <ValueChange value={change} suffix="%" />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Traffic Source</th>
              <th className="border-0">Source Type</th>
              <th className="border-0">Category</th>
              <th className="border-0">Global Rank</th>
              <th className="border-0">Traffic Share</th>
              <th className="border-0">Change</th>
            </tr>
          </thead>
          <tbody>
            {pageTraffic.map((pt) => (
              <TableRow key={`page-traffic-${pt.id}`} {...pt} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const RankingTable = () => {
  const TableRow = (props) => {
    const {
      country,
      countryImage,
      overallRank,
      overallRankChange,
      travelRank,
      travelRankChange,
      widgetsRank,
      widgetsRankChange,
    } = props;

    return (
      <tr>
        <td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image
              src={countryImage}
              className="image-small rounded-circle me-2"
            />
            <div>
              <span className="h6">{country}</span>
            </div>
          </Card.Link>
        </td>
        <td className="fw-bold border-0">{overallRank ? overallRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={overallRankChange} />
        </td>
        <td className="fw-bold border-0">{travelRank ? travelRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={travelRankChange} />
        </td>
        <td className="fw-bold border-0">{widgetsRank ? widgetsRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={widgetsRankChange} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Country</th>
              <th className="border-0">All</th>
              <th className="border-0">All Change</th>
              <th className="border-0">Travel & Local</th>
              <th className="border-0">Travel & Local Change</th>
              <th className="border-0">Widgets</th>
              <th className="border-0">Widgets Change</th>
            </tr>
          </thead>
          <tbody>
            {pageRanking.map((r) => (
              <TableRow key={`ranking-${r.id}`} {...r} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const UserList = () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const totalTransactions = UserListData.length;

  const showModel = () => {
    setShowDefault(true);
  };

  const TableRow = (props) => {
    const { invoiceNumber, subscription, congviec } = props;
    return (
      <tr>
        <td>
          <span className="fw-normal">{invoiceNumber}</span>
          {/* <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {invoiceNumber}
          </Card.Link> */}
        </td>
        <td>
          <span className="fw-normal">{subscription}</span>
        </td>
        <td>
          <span className="fw-normal">{congviec}</span>
        </td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              as={Button}
              split
              variant="link"
              className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={showModel}>
                <FontAwesomeIcon icon={faEye} className="me-2" />
                Chi tiết
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Xóa
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div>
        <Card
          border="light"
          className="table-wrapper table-responsive shadow-sm">
          <Card.Body className="pt-0">
            <Table hover className="user-table align-items-center">
              <thead>
                <tr>
                  <th className="border-bottom">#ID</th>
                  <th className="border-bottom">Tên công nhân</th>
                  <th className="border-bottom">Công việc đang thực hiện</th>
                  <th className="border-bottom">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {UserListData.map((t) => (
                  <TableRow key={`transaction-${t.invoiceNumber}`} {...t} />
                ))}
              </tbody>
            </Table>
            <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
              <Nav>
                <Pagination className="mb-2 mb-lg-0">
                  <Pagination.Prev>Trước</Pagination.Prev>

                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Item>4</Pagination.Item>
                  <Pagination.Item>5</Pagination.Item>
                  <Pagination.Next>Tiếp</Pagination.Next>
                </Pagination>
              </Nav>
              <small className="fw-bold">
                Hiển thị <b>{totalTransactions}</b> trong số <b>25</b> công nhân
              </small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
      <Modal
        as={Modal.Dialog}
        centered
        show={showDefault}
        onHide={handleClose}
        size="xl">
        <Modal.Header>
          <Modal.Title className="h6">Chi tiết công nhân</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <FormUser />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="link"
            className="text-gray ms-auto"
            onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
