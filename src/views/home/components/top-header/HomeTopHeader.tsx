import { Col, Row } from "antd";
import React from "react";



export const HomeTopHeader = () => {
    return (
        <Row style={{
            height: "6vh",
            backgroundColor: "#000",
            color: "#fff"
        }}>
            <Col span={2} ></Col>
            <Col push={2} span={6} style={{
                marginLeft:"5vw"
            }} >Livraison gratuite pour les commandes de plus de 199 TL!</Col>
        </Row>
    )
}