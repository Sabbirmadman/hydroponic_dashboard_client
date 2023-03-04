import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Switch from "react-switch";

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// EC: 0;
// Humidity: 68;
// Moisture_percentage: 0;
// Plant_watering_pump: 0;
// Reservoir_filling_pump_status: 0;
// Reservoir_level: 1178;
// Temperature: 27;
// Temperature_Fan: 0;
// Time: "2023-02-23T18:00:00.000Z";
// pH: 0;
// pH_pump: 0;

function App() {
    const [data, setData] = useState({
        Time: "",
        Temperature: "",
        Humidity: "",
        pH: "",
        Moisture_percentage: "",
        Reservoir_level: "",
        Reservoir_filling_pump_status: "",
        Plant_watering_pump: "",
        pH_pump: "",
        Temperature_Fan: "",
        EC: "",
    });

    const getData = () => {
        axios.get("http://localhost:8000/api/get").then((response) => {
            setData(response.data[0]);
        });
        console.log(data);
    };

    useEffect(() => {
        //call the function every 10 seconds
        getData();
        setInterval(() => {
            getData();
        }, 10000);
    }, []);

    return (
        <div className="App">
            {/* <div>{JSON.stringify(data)}</div> */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                }}
            >
                <h2
                    style={{
                        border: "1px solid white",
                        padding: 10,
                        marginBottom: 60,
                    }}
                >
                    Smart Hydroponic System
                </h2>
                <div
                    className="container"
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row",
                    }}
                >
                    <div
                        style={{
                            height: 150,
                            width: 150,
                        }}
                    >
                        <CircularProgressbarWithChildren
                            value={data.Temperature}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#eee",
                                pathColor: "#019248",
                            })}
                            circleRatio={0.75}
                        >
                            <div style={{ fontSize: 20, marginTop: -5 }}>
                                <sup style={{ fontSize: 25 }}>
                                    {data.Temperature}&deg;C
                                </sup>
                            </div>
                        </CircularProgressbarWithChildren>
                        Temperature
                    </div>
                    <div
                        style={{
                            height: 150,
                            width: 150,
                        }}
                    >
                        <CircularProgressbarWithChildren
                            value={data.Humidity}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#eee",
                                pathColor: "#ff0000",
                            })}
                            circleRatio={0.75}
                        >
                            <div style={{ fontSize: 20, marginTop: -5 }}>
                                <sup style={{ fontSize: 25 }}>
                                    {data.Humidity}%
                                </sup>
                            </div>
                        </CircularProgressbarWithChildren>
                        Humidity
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                        flexDirection: "row",
                        marginTop: 70,
                    }}
                >
                    <div
                        style={{
                            height: 150,
                            width: 150,
                        }}
                    >
                        <CircularProgressbarWithChildren
                            value={data.EC}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#eee",
                                pathColor: "blue",
                            })}
                            circleRatio={0.75}
                        >
                            <div style={{ fontSize: 20, marginTop: -5 }}>
                                <sup style={{ fontSize: 25 }}>{data.EC}</sup>
                            </div>
                        </CircularProgressbarWithChildren>
                        EC
                    </div>
                    <div
                        style={{
                            height: 150,
                            width: 150,
                        }}
                    >
                        <CircularProgressbarWithChildren
                            value={data.pH}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#eee",
                                pathColor: "#fa00ff",
                            })}
                            circleRatio={0.75}
                        >
                            <div style={{ fontSize: 20, marginTop: -5 }}>
                                <sup style={{ fontSize: 25 }}>{data.pH}</sup>
                            </div>
                        </CircularProgressbarWithChildren>
                        PH
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                        flexDirection: "row",
                        marginTop: 70,
                    }}
                >
                    <div
                        style={{
                            height: 150,
                            width: 150,
                        }}
                    >
                        <CircularProgressbarWithChildren
                            value={data.Moisture_percentage}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#eee",
                                pathColor: "yellow",
                            })}
                            circleRatio={0.75}
                        >
                            <div style={{ fontSize: 20, marginTop: -5 }}>
                                <sup style={{ fontSize: 25 }}>
                                    {data.Moisture_percentage}%
                                </sup>
                            </div>
                        </CircularProgressbarWithChildren>
                        Moisture percentage
                    </div>
                    <div
                        style={{
                            height: 150,
                            width: 150,
                        }}
                    >
                        <CircularProgressbarWithChildren
                            value={data.Reservoir_level}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#eee",
                                pathColor: "orange",
                            })}
                            circleRatio={0.75}
                        >
                            <div style={{ fontSize: 20, marginTop: -5 }}>
                                <sup style={{ fontSize: 25 }}>
                                    {data.Reservoir_level}L
                                </sup>
                            </div>
                        </CircularProgressbarWithChildren>
                        Reservoir Level
                    </div>
                </div>
            </div>
            <div className="bottom_sec">
                <ul>
                    <li>
                        Plant Status:
                        <Switch
                            onChange={() => {}}
                            checked={
                                data.Plant_watering_pump == 1 ? true : false
                            }
                        />
                    </li>

                    <li>
                        Reservoir Status:
                        <Switch
                            onChange={() => {}}
                            checked={
                                data.Reservoir_filling_pump_status == 1
                                    ? true
                                    : false
                            }
                        />
                    </li>
                    <li>
                        Fan Status:
                        <Switch
                            onChange={() => {}}
                            checked={data.Temperature_Fan == 1 ? true : false}
                        />
                    </li>
                    <li>
                        PH Status:
                        <Switch
                            onChange={() => {}}
                            checked={data.pH_pump == 1 ? true : false}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
