import { useState } from "react";
import "./ball.scss"

export default function Ball() {
    const [ball, setBall] = useState(true);

    const handleClick = (e) => {
        setBall(false);
        console.log(ball);
      };

      const styleObj = {
        fontSize: 45,
        color: "crimson",
        textAlign: "center",
        paddingTop: "250px",
        fontFamily:"Brush Script MT",
    }
    
    return (
        <div className="ball-body">
           { ball && <div className="ball" onClick={handleClick}></div> }
           { ball && <div className="shadow"></div>}
           { ball===false && <h1 style={styleObj}> Thank you!</h1>}
        </div> 
        
    )
}


