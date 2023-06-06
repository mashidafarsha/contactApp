import React from "react";
import { useQuery } from "react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Graph from "./Graph";

function Dashboard() {
  // Fetching world data using react-query
  const fetchWorldData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    if (!response.ok) {
      throw new Error("Failed to fetch world data");
    }
    return response.json();
  };
// Querying world data using useQuery
  const { data: globalData, isLoading, isError } = useQuery("worldData", fetchWorldData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching world data</div>;
  }
  console.log(globalData);

  return (
    <>
     <div className="max-w-screen-xl mx-auto rounded-2xl">
    <div>
      
    <Graph />
    </div>
      <div className="flex items-center justify-center h-full max-w-screen-xl mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MapContainer center={[0, 0]} zoom={2} style={{ height: "80%", width: "80%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[0, 0]}>
              <Popup className="custom-popup">
                <div className="text-center">
                  <h2 className="mb-2 text-lg">Global</h2>
                  <p className="mb-1">
                    <strong>Total Cases:</strong> {globalData.cases}
                  </p>
                  <p className="mb-1">
                    <strong>Total Deaths:</strong> {globalData.deaths}
                  </p>
                  <p className="mb-1">
                    <strong>Total Recovered:</strong> {globalData.recovered}
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      </div>
    </>
  );
}

export default Dashboard;
