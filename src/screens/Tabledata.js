import React ,{useState,useEffect} from "react";
import {Container,Table} from 'react-bootstrap';
import axios from "axios";
import numWords from 'num-words';


const TableData =({studentId}) =>{

    const[resultDetails,setResultDetails]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3002/studentinfo')
        .then((response) => {
            let temp =[]
            temp =response.data.filter((d) => d.registerId === studentId)
            setResultDetails(temp)
        } )
        
    },[studentId])

    const getTotalMarks =(value) =>{
        let sum=0
        resultDetails.map((d) => {
            sum += d[value]
        })
        return sum
    }

    const isAllPass = () => {
    return 
        resultDetails.every(item =>
             item.result === 'pass');
      }

      const totalObtained = getTotalMarks('obtained_marks');

      const totalMax = getTotalMarks('max_marks');
      const percentage = ((totalObtained / totalMax) * 100).toFixed(2);


    return(
        <>
        <Container>
        <Table className="my-4" responsive bordered>
            <thead>
                <tr>
                    <th style={{padding: "1rem", textAlign:'center'}}>Sl No.</th>
                    <th colSpan={2}>Subject
                        <th style={{padding:'1rem 10rem'}}>Code</th>
                        <th style={{paddingLeft:'10rem'}}>Subject</th>
                    </th>
                    <th colSpan={3}>Examination Marks Obtained
                        <th style={{paddingLeft:'10rem'}}>Max</th>
                        <th style={{paddingLeft:'10rem'}}>Min</th>
                        <th style={{paddingLeft:'10rem'}}>Obtained</th>
                    </th>
                    <th style={{padding:'0.5rem 2rem'}}>Subject Result</th>
                </tr>
            </thead>
            <tbody>
               {
                    resultDetails.map((data,index)=> (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.code}</td>
                            <td>{data.subject}</td>
                            <td>{data.max_marks}</td>
                            <td>{data.min_marks}</td>
                            <td>{data.obtained_marks}</td>
                            <td>{data.result}</td>
                        </tr>
                    ))
               }
               
                
            </tbody>

            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td>{getTotalMarks('max_marks')}</td>
                    <td>{getTotalMarks('min_marks')}</td>
                    <td>{getTotalMarks('obtained_marks')}</td>
                    <td>{isAllPass() ? "PASS" : "FAIL"}</td>
                </tr>  
            </thead>
        </Table>

        <p><b>Total Marks Obtained [in Words] : </b> {numWords(totalObtained).replace(/^\w/, c => c.toUpperCase())} Only</p>

        <p><b>Result of Semester : </b>{isAllPass() ? "PASS" : "FAIL"}</p>

        <p><b>Percentage : </b>{percentage}%</p>
        <p><b>Date : </b> 19 JULY 2025</p>
        </Container>
        </>

    )
}
export default TableData