import React, { useState, useEffect } from "react";
import Card from "./Components/Card/Card";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://6530d94e6c756603295f269f.mockapi.io/jobs"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="flex flex-wrap bg-[#D8D8D8] gap-12 justify-center align-center">
        {jobs.map((job) => (
          <Card key={job.id} teja={job} />
        ))}
      </div>
    </>
  );
}

export default App;
