import React, { useEffect, useState } from "react";
import "../../CSS/Home.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { customFetch } from "../custom/customFetch";
import ToDoList from "./ToDoList";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const [weeklyForecast, setWeeklyForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await customFetch({
        path: `/weather`,
        method: "GET",
      });

      setWeeklyForecast(response);
      console.log(response);
    };
    fetchData(); // 비동기 함수 호출
  }, []);

  return (
    <div className="Home">
      <div className="HomeContainer1">
        <div className="Summary">
          <div className="Title">
            <h2 style={{ margin: "20px", position: "relative", zIndex: "1" }}>
              공정현황 대시보드
            </h2>
          </div>
          <div className="Link">
            <div className="Box" onClick={() => handleClick("/Page2")}>
              <div className="text">
                <h2>8.55%</h2>
                <p className="info"> 설계 변경 미완료율</p>
              </div>
            </div>
            <div className="Box" onClick={() => handleClick("/Page3")}>
              <div className="text">
                <h2>12.8%</h2>
                <p className="info"> DP 작업 미완료율</p>
              </div>
            </div>
            <div className="Box" onClick={() => handleClick("/Page5")}>
              <div className="text">
                <h2>0.63%</h2>
                <p className="info">용접 불량률</p>
              </div>
            </div>
          </div>
        </div>
        <div className="weaherCon">
          <h2 style={{ padding: "20px 0px 20px 20px", margin: "0" }}>
            주간 날씨
          </h2>

          <div className="weather-forecast">
            {weeklyForecast.map((day, index) => (
              <div key={index} className="weather-day">
                <div className="date">
                  {day.date.slice(0, day.date.length - 1)}
                </div>
                <div className="weather-image">
                  <i
                    className={`ico ico_wt${day.weather[0].weatherCode}`} // 첫 번째 시간대의 weatherCode 사용
                    data-tooltip={day.weather[0].weatherDescription} // 첫 번째 시간대의 weatherDescription 사용
                  />
                  <i
                    className={`ico ico_wt${day.weather[1].weatherCode}`} // 첫 번째 시간대의 weatherCode 사용
                    data-tooltip={day.weather[1].weatherDescription} // 첫 번째 시간대의 weatherDescription 사용
                  />
                </div>
                <div className="temp-range">
                  {`${day.weather[0].temperature.lowest}°C / `}
                  <span className="highest-temp">{`${day.weather[0].temperature.highest}°C`}</span>
                </div>
                <div className="rain-chance">{` ${day.weather[0].rainfall}% / ${day.weather[1].rainfall}%`}</div>

                {/* <span className="blind">{day.weather[0].weatherDescription}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="HomeContainer2">
        <ToDoList />
        <div className="hyperlink">
          <h2 style={{ margin: "20px  0 0px 10px" }}>SSO</h2>
          <div className="hyperlink-box">
            <img
              src="/samsung.png"
              alt="google"
              className="hyperlink-img"
              style={{ width: "50px", height: "50px", borderRadius: "15px" }}
            />
            <a
              id="google-mail"
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Symphony
            </a>
          </div>
          <div className="hyperlink-box">
            <img
              src="/yardview.png"
              alt="yradview"
              className="hyperlink-img"
              style={{ width: "50px", height: "50px", borderRadius: "15px" }}
            />
            <a
              id="YardView"
              href="https://www.yardview.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yard View
            </a>
          </div>
          <div className="hyperlink-box">
            <img
              src="/Knox.jpg"
              alt="knox"
              className="hyperlink-img"
              style={{ width: "50px", height: "50px", borderRadius: "15px" }}
            />
            <a
              id="Knox"
              href="https://www.samsungknox.com/ko"
              target="_blank"
              rel="noopener noreferrer"
            >
              Knox
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
