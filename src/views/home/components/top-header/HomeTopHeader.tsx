import { Col, Divider, Row, Space } from "antd";
import { FacebookFilled, TwitterSquareFilled, InstagramFilled } from "@ant-design/icons";
import "./HomeTopHeader.css";
import React from "react";

export const HomeTopHeader = () => {
  return (
    <Row className="top-header">
      <Col push={2} span={16} className="col">
        <h3>Livraison gratuite pour les commandes de plus de 199 TL!</h3>
      </Col>
      <Col span={6} className="col last"  >
        <h3>
          <Space size={20}>
            Kargom Nerede?
            <FacebookFilled />
            <Divider className="divider" type="vertical" />
            <TwitterSquareFilled />
            <InstagramFilled />
          </Space>
        </h3>
      </Col>
    </Row>
  );
};
