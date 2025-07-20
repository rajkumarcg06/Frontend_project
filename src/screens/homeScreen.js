import React from "react";
import { Container,Row,Col,Carousel,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreen =() => {
    return(
        <>
        <div>
            <marquee> VTU Results 2024 out - Check Exam results here !! 
                <Link to="/result_login"> Click here....</Link>Best of luck!!!
            </marquee>
        </div>

        <div>
            <Carousel> 
             <Carousel.Item>
         <img className="img1" src="images/vtu-banner-1.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img1" src="images/vtu-banner-2.png"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img1" src="images/vtu-banner-3.png"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img1" src="images/vtu-banner-4.png"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img1" src="images/vtu-banner-5.png"></img>
        <Carousel.Item>
        <img className="img1" src="images/vtu-banner-6.jpg"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img1" src="images/vtu-banner-6.png"></img>
      </Carousel.Item>
      </Carousel.Item>
    </Carousel>
    </div>

    <div>
        <Row>
            <Col>
                <h3><Link to="/about">Vision</Link></h3>
                <p className="p-style">To become an outstanding 
                    technological university at the cutting edge of science technology.
                </p>

                <Link to='/about' className="btn btn-warning">Read More</Link>
            </Col>

             <Col>
                <h3><Link to="/about">Mission</Link></h3>
                <p className="p-style">To plan the development of technical 
                    education, to establish value-based and need based education and traing.
                </p>

                <Link to='/about' className="btn btn-warning">Read More</Link>
            </Col>

             <Col>
                <h3><Link to="/about">Mandate</Link></h3>
                <p className="p-style">Establish objective 
                    evaluation and certification system for students,programs and institutions.
                </p>

                <Link to='/about' className="btn btn-warning">Read More</Link>
            </Col>
        </Row>
    </div>
    </>
    )
}
export default HomeScreen