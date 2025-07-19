import React from "react";
import { Link } from "react-router-dom";
import { Row,Col,Form, Button } from "react-bootstrap";

const Result_Login =()=>{

    return(
        <>
            <Link  to='/' className="btn btn-dark"
            style={{marginTop:"1rem"}}>Go Back</Link>

            <Row className="text-center">
                <Col>
                <h3>Check your Results Here...</h3>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col></Col>
                <Col style={{marginLeft:'-20rem'}}>      
                <Form>
                    <Form.Label>Enter your Register Number : </Form.Label><br></br>
                    <Form.Control type="text" placeholder="Enter Your Register Number" 
                    style={{width:"70%"}}/><br/>
                    <Button type="submit" style={{marginTop:'1rem'}}>Submit</Button>
                </Form>
                </Col>
            </Row>
        
        </>
    )
}
export default Result_Login