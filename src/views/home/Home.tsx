import { Col, Row } from "antd";
import React from "react";
import { HomeTopHeader } from "./components/top-header";
import "./Home.css";

export const Home = () => {


    return (
        <div className="home">
            <Row>
                <Col span={24}>
                    <HomeTopHeader />
                </Col>

            </Row>

        </div>
    )
}