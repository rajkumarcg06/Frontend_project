import React from "react";
import { Link } from "react-router-dom";
import { Row,Col,Form, Button } from "react-bootstrap";

const Result =()=>{

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
                    <label>Enter your Register Number : </label><br></br>
                    <input type="text" placeholder="Enter Your Register Number" 
                    style={{width:"70%"}}/><br/>
                    <Button type="submit" style={{marginTop:'1rem'}}>Submit</Button>
                </Form>
                </Col>
            </Row>
        
        </>
    )
}
export default Result