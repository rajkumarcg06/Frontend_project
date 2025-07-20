import React from "react";

const Circular =() =>{
    return (
          <>
        <p className="my-5" style={{fontSize:'1.5rem'}}>Circular – Selection of PEC and OEC for 7th and 8th semester.</p>

        <div className="adm-div-1">
            <div className="adm-div-2">
                <h4>18</h4>
                <p>July</p>
                <p>2025</p>
            </div>
            <h2 style={{marginLeft:"1rem"}}>Attachment</h2>
        </div>


        <p >
            <a href="/pdf/circular-1.pdf" className="adm-p" >
            <img src="images/downloadicon.png" 
        alt="Download PDF" 
        style={{ height: '5rem',width: '15%', cursor: 'pointer'}}/>
        <span className="hover-text">
         Circular (1734)-Selection of PEC and OEC for 7th and 8th Semeter
         </span>
        </a>

        </p>

        </>
    )
}
export default Circular