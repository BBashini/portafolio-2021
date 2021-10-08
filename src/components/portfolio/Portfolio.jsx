import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  commercePortfolio,
  socialPortfolio,
  gamesPortfolio,
  blogPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "commerce",
      title: "Commerce",
    },
    {
      id: "social",
      title: "Social Media",
    },
    {
      id: "games",
      title: "Games",
    },
    {
      id: "blog",
      title: "Blog",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "commerce":
        setData(commercePortfolio);
        break;
      case "social":
        setData(socialPortfolio);
        break;
      case "games":
        setData(gamesPortfolio);
        break;
      case "blog":
        setData(blogPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
          <a href={d.href}>
            <img
              src={d.img}
              alt=""
            />
          </a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}