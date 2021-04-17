import { Col, Row } from "antd";
import React from "react";
import { HomeTopHeader,HomeHeader } from "./components";
import "./Home.css";

export const Home = () => {
  return (
    <Row className="home">
      <Col span={24}>
        <HomeTopHeader />
        <HomeHeader />
      </Col>
    </Row>
  );
};
