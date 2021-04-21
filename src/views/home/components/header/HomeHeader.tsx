import { Col, Row, Space, Input, Menu } from "antd";
import React from "react";
import "./HomeHeader.css";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";
const { Search } = Input;

export const HomeHeader = () => {
  return (
    <Row className="header" gutter={16}>
      <Col span={8} className="col_logo">
        <img
          className="header_logo"
          alt="logo"
          src="https://www.veganbakkal.com.tr/Uploads/EditorUploads/logo-veganbakkal.png"
        />
      </Col>
      <Col span={10} className="col_search">
        <Search placeholder="Search" enterButton size="large" loading={false} />
      </Col>
      <Col push={2} span={4} className="col-auth">
        <h3>
          <span>
            <Space>
              <UserOutlined />
              <span>IDENTIFIANT</span>
              <UserAddOutlined className="col-auth-icon" />
              <span>S'INSCRIRE</span>
            </Space>
          </span>
        </h3>
      </Col>
      <Col
        span={24}
        style={{
          marginTop: "5vh",
        }}
      >
        <Menu
          style={{
            fontSize: "22px",
            width:"100%",
            border:"none",
            background:"#DCDCDC",
            height:"8vh",
            borderRadius:"1em",
            padding:"6px"
            
          }}
          mode="horizontal"
        >
          <Menu.Item key="TÜM ÜRÜNLER">TÜM ÜRÜNLER</Menu.Item>
          <Menu.Item key="Menu1">Menu1</Menu.Item>
          <Menu.Item key="Menu2">Menu2</Menu.Item>
          <Menu.Item key="Menu3">Menu3</Menu.Item>
          <Menu.Item key="Menu4">Menu4</Menu.Item>
          <Menu.Item key="Menu5">Menu5</Menu.Item>
          <Menu.Item key="Menu6">Menu6</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};
