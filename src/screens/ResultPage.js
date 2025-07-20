import React ,{useState,useEffect} from "react";
import { Row,Col,Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TableData from "./Tabledata";
import axios from "axios";

const ResultPage=() =>{

    const[studentDetails, setStudentDetails]= useState([])

    const value= useParams()

    useEffect(()=> {
        axios.get('http://localhost:3002/studentinfo')
        .then((response)=> {
            response.data.map((data) => {
                if(data.registerId === value.id)
                    setStudentDetails(data)

            })
        })
    },[])


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
                    <Form.Label style={{marginLeft:"4.5rem"}}>{studentDetails.studentName}</Form.Label><br/>
                    <Form.Label>Father's/mother's Name :</Form.Label>
                    <Form.Label style={{marginLeft:"0.5rem"}}>{studentDetails.FatherName}</Form.Label><br/>
                    <Form.Label>College Name :</Form.Label>
                    <Form.Label style={{marginLeft:"4.5rem"}}>{studentDetails.collegeName}</Form.Label>
                </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                <Form.Group>
                    <Form.Label style={{float:'right'}}>RegiterID : {studentDetails.registerId}</Form.Label>
                    
                </Form.Group>
                </Col>
            </Row>


            <Row>
                <TableData studentId ={studentDetails.registerId} />
            </Row>
        </>
    )
}
export default ResultPage