import React from "react";
import { Container,Row,Col,Carousel,Button } from "react-bootstrap";

const HomeScreen =() => {
    return(
        <>
        <div>
            <marquee> VTU Results 2024 out - Check Exam results here !! 
                <a href="#"> Click here....</a>Best of luck!!!
            </marquee>
        </div>

        <div>
            <Carousel> 
             <Carousel.Item>
         <img className="img1" src="images/img1.jpeg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img1" src="images/img2.webp"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img1" src="images/img3.jpeg"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img1" src="images/img4.jpg"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img1" src="images/img5.jpg"></img>
      </Carousel.Item>
    </Carousel>
    </div>

    <div>
        <Row>
            <Col>
                <h3><a href="#">Vision</a></h3>
                <p className="p-style">To plan the development of technical education, to 
                    establish value-based and need-based education and training in egineering and technology,
                    with a view to generate qualified and competent manpower,
                    responsive to technological and social nedds.
                </p>

                <p className="p-style">To plan the development of technical education, to 
                    establish value-based and need-based education and training in egineering and technology,
                    with a view to generate qualified and competent manpower,
                    responsive to technological and social nedds.
                </p>

                <Button variant="warning">Read More.....</Button>
            </Col>

             <Col>
                <h3><a href="#">Mission</a></h3>
                <p className="p-style">To plan the development of technical education, to 
                    establish value-based and need-based education and training in egineering and technology,
                    with a view to generate qualified and competent manpower,
                    responsive to technological and social nedds.
                </p>

                <p className="p-style">To plan the development of technical education, to 
                    establish value-based and need-based education and training in egineering and technology,
                    with a view to generate qualified and competent manpower,
                    responsive to technological and social nedds.
                </p>

                <Button variant="warning">Read More.....</Button>
            </Col>

             <Col>
                <h3><a href="#">Mandate</a></h3>
                <p className="p-style">To plan the development of technical education, to 
                    establish value-based and need-based education and training in egineering and technology,
                    with a view to generate qualified and competent manpower,
                    responsive to technological and social nedds.
                </p>

                <p className="p-style">To plan the development of technical education, to 
                    establish value-based and need-based education and training in egineering and technology,
                    with a view to generate qualified and competent manpower,
                    responsive to technological and social nedds.
                </p>

                <Button variant="warning">Read More.....</Button>
            </Col>
        </Row>
    </div>
    </>
    )
}
export default HomeScreen