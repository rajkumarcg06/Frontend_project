import React from "react";
import { Row,Col,Form } from "react-bootstrap";
import TableData from "./Tabledata";

const ResultPage=() =>{
    return (
        <>
            <Row className="justify-content-center my-5" >
                <Col sm={12} md={6}>
                <h4>Visvesvaraya Technological University,Belagaum</h4>
                <h6 style={{marginLeft:"4rem",fontSize:"1rem"}}>VII -Semester B.E Examination Results,Nov/Dec-2024</h6>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6}>
                <Form.Group>
                    <Form.Label>Student Name :</Form.Label>
                    <Form.Label style={{marginLeft:"4.5rem"}}>John</Form.Label><br/>
                    <Form.Label>Father's/mother's Name :</Form.Label>
                    <Form.Label style={{marginLeft:"0.5rem"}}>smith</Form.Label><br/>
                    <Form.Label>College Name :</Form.Label>
                    <Form.Label style={{marginLeft:"4rem"}}>Presidency University</Form.Label>
                </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                <Form.Group>
                    <Form.Label style={{float:'right'}}>Register No. : 1IS21CSE221</Form.Label>
                    
                </Form.Group>
                </Col>
            </Row>


            <Row>
                <TableData />
            </Row>
        </>
    )
}
export default ResultPage