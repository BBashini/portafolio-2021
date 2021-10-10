import "./about.scss";
import faceRecognition from "./faceRecognition.jpg"
import waxSeal from "./waxSeal.jpg"
import globalCitizen from "./globalCitizen.jpg"

export default function About() {
  const data = [
    {
      id: 1,
      name: "BEng Computer Engineer",
      title: "Ryerson University",
      img:waxSeal,
      desc:
        "Graduated with Distinction, Deans list, Minor in Econ",
    },
    {
      id: 2,
      name: "AISEC Global Entrepreneur",
      title: "Unipayments",
      img:globalCitizen,
      desc:
        "Software development Intern at Brasilia, Brazil",
      featured: true,
    },
    {
      id: 3,
      name: "Published Author",
      title: "IEEE",
      img:faceRecognition,
      desc:
        "Parallel Computer For Face Recognition Using Artificial Intelligence",
    },
  ];
  return (
    <div className="testimonials" id="about">
      <h1>About Me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              
              <img
                className="user"
                src={d.img}
                alt=""
              />
             
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}