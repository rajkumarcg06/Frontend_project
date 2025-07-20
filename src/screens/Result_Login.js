import React,{useState} from "react";
import { Link,useNavigate , useParams} from "react-router-dom";
import { Row,Col,Form, Button,Alert } from "react-bootstrap";
import axios from 'axios';
// import StudentResult from "./StudentResult";


const Result_Login =()=>{

    const[registerInput, setRegisterInput]=useState("")

    const[error,setError]=useState("")
    // const [studentData, setStudentData] = useState(null);

    const navigate = useNavigate() 
    


    const SubmitHandler =(e)=>{
        e.preventDefault()
        if(registerInput===''){
            setError("Please Enter Your RegiterID")
        } 
        else{
            axios.get("http://localhost:3002/studentinfo")
        .then((response) => {
        //   const student = res.data.find((s) => s.registerId === registerInput);
        //   if (student) {
        //     setStudentData(student);
        //     setError("");
        //   } else {
        //     setError("No student found with that Register ID");
        //     setStudentData(null);
        //   }
        // })
        // .catch(() => {
        //   setError("Error fetching data");
        

        console.log('res',response.data)
        response.data.map((data, index) => {

            if(data.registerId === registerInput){
                setRegisterInput("")
                navigate(`/result_page/${registerInput}`)
            }else{
                setRegisterInput("")
                setError("Invalid Register ID")
            }
        })
        })
    }
  }


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
                <Form onSubmit={(e)=>SubmitHandler(e)}>
                    <Form.Label>Enter your Register Number : </Form.Label><br></br>
                    <Form.Control type="text" placeholder="Enter Your Register Number" 
                    style={{width:"70%"}} value={registerInput}  onChange={(e)=>setRegisterInput(e.target.value)}/><br/>
                    <Button type="submit" style={{marginTop:'1rem'}} >Submit</Button>
                </Form>
                </Col>
            </Row>
            <Row className="justify-content-center my-3">
                {error ? <Alert variant="danger">{error}</Alert>:''}
            </Row>

            {/* {studentData && (
        <Row className="justify-content-center">
          <Col md={8}>
            <StudentResult student={studentData} />
          </Col>
        </Row>
            )} */}
        
     </>
    )
}
export default Result_Login