import React from "react";
import {Table} from 'react-bootstrap'

const Course =() => {
    return(
        <div className="course-div my-5">
            <Table  className=" my-4" responsive bordered>
                <thead >
                    <tr className="course-tr1 ">
                        <th>Certificate / Document issued</th>
                        <th>Documents to be submitted</th>
                        <th>Processing fee
                            (in Indian Rupees ; to be paid online)</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className="course-tr-2">
                        <td>Eligibility for UG and PG Courses</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="course-tr-2" >
                        <td>a) For Admission to UG Courses</td>
                        <td style={{textAlign:'justify'}}><p>a) Application Addressed to Registrar, VTU, Belagavi clearly
                               mentioning the Postal Address, e-mail id and
                               contact number (format of application attached).</p>
                            <p>
                            b)Attested Photocopies of 10+2 marks card</p></td>
                        <td style={{textAlign:'justify'}}>Karnataka - Rs 1,000
                            Non-Karnataka/SAARC Country - Rs 2,500
                            Foreign National / PIO/NRI - Rs 12,500</td>
                    </tr>

                    <tr className="course-tr-2">
                        <td>b) For Admission to PG Courses</td>
                        <td style={{textAlign:'justify'}}><p>a)Application Addressed to Registrar, VTU, Belagavi clearly
                                mentioning the Postal Address, e-mail id and
                                contact number (format of application attached).</p>
                                <p>b)Attested Photocopies of 10+2 marks card</p>
                                <p>c)Attested Photocopies of all semesters / years
                                   marks cards / grades cards of Undergraduate course</p>
                                <p>d) Attested Photocopy of Degree Certificate</p></td>
                        <td style={{textAlign:'justify'}}>Karnataka - Rs 1,000
                            Non-Karnataka/SAARC Country - Rs 2,500
                            Foreign National / PIO/NRI - Rs 12,500</td>
                    </tr>


                </tbody>
            </Table>
            </div>
    )

}
export default Course