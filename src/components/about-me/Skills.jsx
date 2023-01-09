import { Col, Container, Row } from "react-bootstrap";

import { SkillCard } from "./SkillCard";

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import Javascript from '../../assets/javascript.png';
import Node from '../../assets/node.png';
import React from '../../assets/react.png';
import Github from '../../assets/github.png';

import '../../styles/global.css';

export const Skills = () => {
    return (
        <Container fluid className="d-flex justify-content-center align-center flex-column text-center">
            <div className="section-title-container">
                <h1 className="section-title">My skills</h1>
                <p className="section-subtitle">Here are some of the technologies that i've worked with</p>
            </div>

            <Container fluid className="d-flex justify-content-center align-center flex-column">
                <Row className='justify-content-md-center'>
                    <Col xs={6} md={4}>
                        <SkillCard imgSrc={HTML} skill='HTML 5'/>
                    </Col>
                    <Col xs={6} md={4}>
                        <SkillCard imgSrc={CSS} skill='CSS 3'/>
                    </Col>
                    <Col xs={6} md={4}>
                        <SkillCard imgSrc={Javascript} skill='JavaScript'/>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col xs={6} md={4}>
                        <SkillCard imgSrc={Node} skill='Node JS'/>
                    </Col>
                    <Col xs={6} md={4}>
                        <SkillCard imgSrc={React} skill='React JS'/>
                    </Col>
                    <Col xs={6} md={4}>
                        <SkillCard imgSrc={Github} skill='Github'/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}