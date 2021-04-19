import { Col, Row, Space, Input } from "antd";
import React from "react";
import "./HomeHeader.css";
import {
  SearchOutlined,
  UserOutlined,
  UserAddOutlined,
  RightSquareFilled,
} from "@ant-design/icons";
const { Search } = Input;

export const HomeHeader = () => {
  return (
    <Row className="header" gutter={20}>
      <Col span={8} className="col_logo">
        <img
          className="header_logo"
          alt="logo"
          src="https://www.veganbakkal.com.tr/Uploads/EditorUploads/logo-veganbakkal.png"
        />
      </Col>
      <Col span={10} className="col_search">
        <Search
          placeholder="Search"
          enterButton={
            <RightSquareFilled
              style={{
                fontSize: "22px",
              }}
            />
          }
          size="large"
          loading={false}
        />
      </Col>
      <Col push={2} span={4} className="col-auth">
        <h3>
          <Space size={20}>
            <UserOutlined />
            <span>IDENTIFIANT</span>

            <UserAddOutlined />
            <span>S'INSCRIRE</span>
          </Space>
        </h3>
      </Col>
    </Row>
  );
};
