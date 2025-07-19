import React from "react";
import {Container,Table} from 'react-bootstrap'


const TableData =() =>{
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
                <tr>
                    <td>1</td>
                    <td>CSE2001</td>
                    <td>Java</td>
                    <td>100</td>
                    <td>35</td>
                    <td>70</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>CSE2001</td>
                    <td>Java</td>
                    <td>100</td>
                    <td>35</td>
                    <td>70</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>CSE2001</td>
                    <td>Java</td>
                    <td>100</td>
                    <td>35</td>
                    <td>70</td>
                    <td>Pass</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>CSE2001</td>
                    <td>Java</td>
                    <td>100</td>
                    <td>35</td>
                    <td>70</td>
                    <td>Pass</td>
                </tr>
                
            </tbody>

            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td>400</td>
                    <td>140</td>
                    <td>280</td>
                    <td>Pass</td>
                </tr>  
            </thead>
        </Table>

        <p><b>Total Marks Obtained [in Words] : </b> Two Hundren and Eighty Only</p>

        <p><b>Result of Semester : </b>PASS</p>

        <p><b>Percentage : </b>70%</p>
        <p><b>Date : </b> 19 JULY 2025</p>
        </Container>
        </>

    )
}
export default TableData