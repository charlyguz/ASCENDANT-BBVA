import React from "react";
import Navbar from "../global components/navbar/Navbar";


function Hipoteca({ account, setAccount }){
    return(
        <React.Fragment>
        <Navbar account={account} setAccount={setAccount}/>
        <div className="hipoteca__container-general">
            <h1>Hipoteca</h1>
        </div>
        </React.Fragment>
    )
}


export default Hipoteca;