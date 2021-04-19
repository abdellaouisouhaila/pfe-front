import { Col, Row, Space } from "antd";
import React from "react";
import "./HomeHeader.css";
import { SearchOutlined, UserOutlined, UserAddOutlined  } from "@ant-design/icons";

export const HomeHeader = () => {
  return (
    <Row className="header">
      <Col span={8} className="col_logo">
        <img className="header_logo" alt="logo" src="" />
      </Col>
      <Col span={8} className="col_search">
        <input type="text" className="header_searchInput" placeholder="Rechercher" />
        <SearchOutlined className="header_searchIcon"  />
    
      </Col>
   
      <Col span={8} className="col_sign">
        <h3>
          <Space size={20}>
            <UserOutlined />
            <span>IDENTIFIANT</span>
     
            <UserAddOutlined />
            <span>S'INSCRIRE</span>
          </Space>
        </h3>
      </Col> 
      <Col span={4} className="col_category">
        <h3>
        
          tous les produits
        
        

        </h3>


      </Col>
    </Row>  
  );
};
