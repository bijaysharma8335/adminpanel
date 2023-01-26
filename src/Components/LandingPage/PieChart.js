import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { items } from "./constant.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
    return (
        <div
            className="m-auto"
            style={{
                width: "53%",
                height: "28%",
                position: "relative",
                marginBottom: "1%",
                padding: "1%",
            }}
        >
            <Pie
                className=" d-inline-block m-auto"
                data={items}
                options={{
                    title: {
                        display: true,
                        text: "Average Deliver per month",
                        fontSize: 20,
                    },
                    legend: {
                        display: true,
                        position: "right",
                    },
                }}
            />
        </div>
    );
};

export default Chart;
