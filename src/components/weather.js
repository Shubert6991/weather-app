import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";

const Weather = ({ weatherData }) => {
  console.log(weatherData);
  let currentDate = new Date();
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const time = currentDate.toLocaleTimeString("en-US");
  return (
    <Row>
      <Card className="main-card" bg="ligth">
        <Card.Body>
          <section>
            <img
              src={`${process.env.REACT_APP_ICON_URL}n/${weatherData.weather[0].icon}@2x.png`}
            />
            <h2>{weatherData.name}</h2>
            <h3>{weatherData.weather[0].main}</h3>
            <h1>{weatherData.main.temp} &deg;C</h1>

            <h3>{`${today.toDateString()}`}</h3>
            <h3>{time}</h3>
          </section>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>More Info</Accordion.Header>
              <Accordion.Body>
                <h4>Feels Like: {weatherData.main.feels_like} &deg;C</h4>
                <h4>Max: {weatherData.main.temp_max} &deg;C</h4>
                <h4>Min: {weatherData.main.temp_min} &deg;C</h4>
                <h4>Humidity: {weatherData.main.humidity}%</h4>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Weather;
