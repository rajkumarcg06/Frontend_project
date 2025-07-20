import React from "react";
import { Link } from "react-router-dom";

const Admission=() =>{
    return(
        <>
        <p className="my-5" style={{fontSize:'1.5rem'}}>Circular – Selection of PEC and OEC for 7th and 8th semester.</p>

        <div className="adm-div-1">
            <div className="adm-div-2">
                <h4>22</h4>
                <p>June</p>
                <p>2022</p>
            </div>
            <h2 style={{marginLeft:"1rem"}}>Google form ….</h2><br/>
            
        </div>
        <h2 style={{marginLeft:'8rem'}}><a href="https://forms.gle/Bu8m3HhmSrp9xYPg6">https://forms.gle/Bu8m3H......</a></h2>


        <p > <h2 style={{marginLeft:"7.3rem",marginTop:'2rem'}}>Attachment</h2>
            <a href="/pdf/admission.pdf" className="adm-p" >
            <img src="images/downloadicon.png" 
        alt="Download PDF" 
        style={{ height: '5rem',width: '15%', cursor: 'pointer'}}/>
        <span className="hover-text">
         VTU BSc Admissions<div style={{color:'grey'}}>size : 2MB </div>
         </span>
        </a>

        </p>

        </>
        
    )

}
export default Admission