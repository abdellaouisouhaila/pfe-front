import { Col, Row } from "antd";
import React from "react";
import { HomeTopHeader } from "./components/top-header";
import "./Home.css";

export const Home = () => {
  return (
    <Row className="home">
      <Col span={24}>
        <HomeTopHeader />
      </Col>
    </Row>
  );
};
