import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Data1",
            data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 10000000 })
            ),
            backgroundColor: "blue",
        },
        {
            label: "Data2",
            data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000000 })
            ),
            backgroundColor: "red",
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Line Chart",
        },
    },
};

const LineChart = () => {
    return <Bar options={options} data={data} />;
};

export default LineChart;
