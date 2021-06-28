import { React, useEffect, useState } from "react";
import "./State.css";
//import virus from "./covid-cells.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function State() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    const response = await fetch("https://api.covid19india.org/data.json");
    const data = await response.json();
    setData(data.statewise);
    console.log(data.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold"> India </span> Covid-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Deltaconfirmed</th>
                <th>Deltarecovered</th>
                <th>Deltadeaths</th>
                <th>Lastupdatedtime</th>
                <th>Migratedother</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElement, index) => {
                return (
                  <tr key={index}>
                    <td>{curElement.state}</td>
                    <td>{curElement.confirmed}</td>
                    <td>{curElement.recovered}</td>
                    <td>{curElement.deaths}</td>
                    <td>{curElement.active}</td>
                    <td>{curElement.deltaconfirmed}</td>
                    <td>{curElement.deltarecovered}</td>
                    <td>{curElement.deltadeaths}</td>
                    <td>{curElement.lastupdatedtime}</td>
                    <td>{curElement.migratedother}</td>
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
