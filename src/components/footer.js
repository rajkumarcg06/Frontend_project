import React from "react";
import {Row, Col} from "react-bootstrap"
import { BsFacebook,BsLinkedin,BsChatRight, BsTwitter,BsWhatsapp } from 'react-icons/bs';

const Footer =() => {

    const currentYear = new Date().getFullYear()
    return(
        <footer >
            <Row className="text-center" >
                <Col>
                      <b>VTU &copy;{currentYear}</b>
                </Col>
            </Row>
            <Row className="text-center my-4"  >
                <Col >
                      <a href="https://www.facebook.com/vtuinfo/" style={{marginRight:'2rem'}} >
                    <BsFacebook size={35} color="#4267B2" /></a>
                <a href="https://www.linkedin.com/school/visvesvaraya-technological-university/?originalSubdomain=in"style={{marginRight:'2rem'}}>
                    <BsLinkedin size={35} color="#4267B2" /></a>
                <a href="https://x.com/vtuinfo?lang=en">
                    <BsTwitter size={35} color="#4267B2" /></a>
                <a href="https://www.justdial.com/Bangalore/
                Visveshwaraya-Technological-University-Regional-Office-Near-BDA-Complex-Annapoorneswari-Nagar
                /080P5602086_BZDET/reviews" style={{float:'right',marginTop:'-8rem',marginRight:'2rem'}}>
                    <BsChatRight size={40} color="#050505ff" /></a>
                <a href="https://chat.whatsapp.com/EkV0hLSw82Y6PZuqu9ldy3" style={{float:'right',marginTop:'-12rem',marginRight:'2rem'}}>
                    <BsWhatsapp size={40} color="#13950fff" /></a>
                </Col>
            </Row>
        </footer>
    )
}
export default Footer