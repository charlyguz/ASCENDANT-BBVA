import React from "react";
import "./Staking_Active.css";

function Staking_Active(){
    function onStaking() {
        console.log("Staking now");
    }
    const isConect = true;
    return(
        <React.Fragment>
            <div className="evento-staking">
                {isConect ? (
                    <React.Fragment>
                        <div className="evento-staking"> esta conectado</div>
                        <button className="buttom-staking" onClick={onStaking}>Staking now</button>
                    </React.Fragment>
                ):( 
                    <div className="evento-staking"> conectate marica</div>
                )}
            </div>
        </React.Fragment>
    );
}

export default Staking_Active;