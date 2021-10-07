import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react"
import letterB from "./B.png"
import down from "./down.png"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Engineer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={letterB} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Bashini B</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
}