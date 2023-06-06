import React from "react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function Graph() {
     // Fetching fluctation data using react-query
  const fetchCasesFluctationData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    if (!response.ok) {
      throw new Error("Failed to fetch world data");
    }
    return response.json();
  };
// Querying fluctation data  using useQuery
  const {
    data,
    isLoading,
    isError,
  } = useQuery("worldData", fetchCasesFluctationData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching world data</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Invalid data format</div>;
  }
console.log(data,"kkkk");
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: "Cases Line charts",
      },
    },
  };

  const labels = data.map((country) => country.country);
  const cases = data.map((country) => country.cases);

  const linedata = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: cases,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return(
   
 <Line options={options} data={linedata} />
 
  )
  
}

export default Graph;
