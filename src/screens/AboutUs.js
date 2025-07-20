import React from "react";
import { Image } from "react-bootstrap";

const AboutUs=() => {
    return(
        <>
        <div className="abt">
            <p><h2>Vision</h2><br/>To become an outstanding Technological University at the cutting
                    edge of Science and Technology that produces world class 
                    Knowledge-delivery, Research, Extension and Leadership in Technology
                    innovation for Industry and Society.</p>
            <Image className="abt-img" src="images/about-1.jpg" style={{float:'right'}}/>
        </div>
        <div className="abt">
            
            <Image className="abt-img" src="images/about-2.jpg" style={{float:'left'}}/>
            <p><h2>Mission</h2><br/>To plan the development of technical education, to establish
                    value-based and need-based education and training in engineering
                    and technology, with a view to generate qualified and competent
                    manpower, responsive to technological and societal needs.</p>
        </div>
        <div className="abt">
            <p><h2>Mandate</h2><br/>The Visvesvaraya Technological University has 
                been established by the Government of the Karnataka 
                in order to Promote planned and sustainable development 
                of technical education consistent with state and national policies.<br/>
                <li>Design need based programs that ensure adequate human resource
                   of the right kind.</li>
                <li>Establish objective evaluation and certification systems 
                  for students,programs and institutions.</li>
                <li>Collaborate with national and international institutions
                 R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user agencies.</li></p>
            <Image className="abt-img" src="images/about-3.jpg" style={{float:'right'}}/>
        </div>
        </>
    )
}
export default AboutUs