import { useState } from "react";
import "./works.scss";
import arrow from "./arrow.png"
import ecommerce from "./ecommerce.png"
import business from "./business.png"
import medApp from "./medApp.png"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Full Stack Web Developer",
      company: "Veer AI",
      desc:
        "Worked on both the Frontend and the Backend of company website & Frontend of company product.",
      img:ecommerce,
    },
    {
      id: "2",
      title: "Engineering Compliance Analyst Intern",
      company: "Medstack Inc",
      desc:
        "Assisted in acquiring HiTrust certification.",
      img:business,
    },
    {
      id: "3",
      title: "Lead Full Stack Developer Intern",
      company: "St.Micheal's hospital & Biomedical Zone",
      desc:
        "Modified Frontend and created Backend for With Women application",
      img:medApp,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h1>{d.title}</h1>
                  <h3> {d.company}</h3>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}