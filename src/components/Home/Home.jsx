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
      <div className="container1">
        <div className="Title">
          <h1>공정현황 대시보드</h1>
        </div>
        <div className="Information">
          <h4>
            최종 개정도 관리, 개정도 작업 현황, 용접률 불량 관리를 관리합니다.
          </h4>
        </div>
        <div className="Link">
          <div className="Box" onClick={() => handleClick("/Page2")}>
            <img
              src="/First.jpg"
              alt="First"
              className="IMG"
              style={{ width: "300px", height: "300px" }}
            />
            <div className="text">
              <h2>20%</h2>
              설계 변경 미완료율
            </div>
          </div>
          <div className="Box" onClick={() => handleClick("/Page3")}>
            <img
              src="/Second.jpg"
              alt="Second"
              className="IMG"
              style={{ width: "300px", height: "300px" }}
            />
            <div className="text">
              <h2>10%</h2>
              DP 작업 미완료율{" "}
            </div>
          </div>
          <div className="Box" onClick={() => handleClick("/Page5")}>
            <img
              src="/Third.jpg"
              alt="Third"
              className="IMG"
              style={{ width: "300px", height: "300px" }}
            />
            <div className="text">
              <h2>0.5%</h2>
              용접 불량률{" "}
            </div>
          </div>
        </div>
        <div className="weather-forecast">
          {weeklyForecast.map((day, index) => (
            <div key={index} className="weather-day">
              <div className="date">{day.date}</div>
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
      <div className="container2">
        <Box className="hyperlink">
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
          <br />
          <a
            href="https://www.naver.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Naver
          </a>
          <br />
          <a
            href="http://www.samsungshi.com/Ko/Default.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Samsung Heavy Industries
          </a>
        </Box>

        <ToDoList />
      </div>
    </div>
  );
};

export default Home;
