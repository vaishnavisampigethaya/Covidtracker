import { React, useEffect, useState } from "react";
import "./Country.css";

export default function Country() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();
    setData(data.Countries);
    console.log(data.Countries);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold"> World</span> Covid-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Country</th>
                <th>Total Confirmed</th>
                <th>Total Recovered</th>
                <th>Total Deaths</th>
                <th>New Confimed</th>
                <th>New Deaths</th>
                <th>New Recovered</th>
                <th>Lastupdatedtime</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElement, index) => {
                return (
                  <tr key={index}>
                    <td>{curElement.Country}</td>
                    <td>{curElement.TotalConfirmed}</td>
                    <td>{curElement.ToatlRecovered}</td>
                    <td>{curElement.TotalDeaths}</td>
                    <td>{curElement.NewConfirmed}</td>
                    <td>{curElement.NewDeaths}</td>
                    <td>{curElement.NewRecovered}</td>
                    <td>{curElement.Date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
