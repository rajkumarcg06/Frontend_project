import React from "react";
import {Row, Col} from "react-bootstrap"
import { BsFacebook,BsLinkedin,BsChat, BsTwitter } from 'react-icons/bs';

const Footer =() => {

    const currentYear = new Date().getFullYear()
    return(
        <footer >
            <Row className="text-center" >
                <Col>
                      VTU &copy;{currentYear}
                </Col>
            </Row>
            <div style={{marginLeft:'55rem',gap:"2rem"}}>
                <Row style={{gap:'2rem', marginTop:'2rem'}}>
                <a href="https://www.facebook.com/vtuinfo/" >
                    <BsFacebook size={24} color="#4267B2" /></a>
                <a href="https://www.linkedin.com/school/visvesvaraya-technological-university/?originalSubdomain=in">
                    <BsLinkedin size={24} color="#4267B2" /></a>
                <a href="https://x.com/vtuinfo?lang=en">
                    <BsTwitter size={24} color="#4267B2" /></a>
                <a href="https://www.justdial.com/Bangalore/
                Visveshwaraya-Technological-University-Regional-Office-Near-BDA-Complex-Annapoorneswari-Nagar
                /080P5602086_BZDET/reviews"  style={{marginLeft:'48rem'}}>
                    <BsChat size={24} color="#4267B2" /></a>
                </Row>
            </div>
        </footer>
    )
}
export default Footer